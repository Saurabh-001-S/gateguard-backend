import { Response, NextFunction } from "express";
import { prisma } from "../utils/prisma";
import { validateGateProximity } from "../utils/geo";
import { AppError } from "../middleware/errorHandler";
import { AuthRequest } from "../types";
import {
  emitNewEntryRequest,
  emitDashboardStats,
  emitSuspiciousAlert,
} from "../utils/socket";

// ─── Helper: get active gate config ────────────────────────────────────────
async function getActiveGate() {
  const gate = await prisma.gateConfig.findFirst({ where: { isActive: true } });
  if (!gate) throw new AppError(503, "No active gate configuration found");
  return gate;
}

// ─── Helper: ensure no pending request exists for this student ──────────────
async function assertNoPendingRequest(studentId: number) {
  const pending = await prisma.entryExitLog.findFirst({
    where: { studentId, approvalStatus: "PENDING" },
  });
  if (pending) {
    throw new AppError(
      409,
      "You already have a pending request. Wait for admin decision."
    );
  }
}

// POST /api/entry-exit/exit
// Rule: student must be INSIDE; if near gate → AUTO_APPROVED; else rejected
export async function requestExit(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const studentId = req.user!.id;
    const { latitude, longitude } = req.body;

    const student = await prisma.student.findUnique({ where: { id: studentId } });
    if (!student) throw new AppError(404, "Student not found");
    if (student.currentStatus !== "INSIDE") {
      throw new AppError(400, "You are already outside campus");
    }

    await assertNoPendingRequest(studentId);

    const gate = await getActiveGate();
    const { isValid, isSuspicious, distanceMetres } = validateGateProximity(
      latitude,
      longitude,
      Number(gate.latitude),
      Number(gate.longitude),
      gate.radius
    );

    if (!isValid) {
      // Log the suspicious/invalid attempt — never delete
      const log = await prisma.entryExitLog.create({
        data: {
          studentId,
          deviceSessionId: req.user!.sessionId ?? null,
          requestType: "EXIT",
          latitude,
          longitude,
          locationValid: false,
          suspicious: isSuspicious,
          approvalStatus: "REJECTED",
          approvalTime: new Date(),
        },
      });

      if (isSuspicious) {
        emitSuspiciousAlert({
          logId: log.id,
          student: { id: studentId, name: student.name },
          distanceMetres: Math.round(distanceMetres),
          latitude,
          longitude,
        });
      }

      throw new AppError(
        400,
        `You are ${Math.round(distanceMetres)}m from the gate. Must be within ${gate.radius}m.`
      );
    }

    // Valid & near gate → auto approve + update status in one transaction
    const [log] = await prisma.$transaction([
      prisma.entryExitLog.create({
        data: {
          studentId,
          deviceSessionId: req.user!.sessionId ?? null,
          requestType: "EXIT",
          latitude,
          longitude,
          locationValid: true,
          suspicious: false,
          approvalStatus: "AUTO_APPROVED",
          approvalTime: new Date(),
        },
      }),
      prisma.student.update({
        where: { id: studentId },
        data: { currentStatus: "OUTSIDE" },
      }),
    ]);

    // Broadcast updated counts to admin dashboard
    const [insideCount, outsideCount, pendingCount] = await Promise.all([
      prisma.student.count({ where: { currentStatus: "INSIDE" } }),
      prisma.student.count({ where: { currentStatus: "OUTSIDE" } }),
      prisma.entryExitLog.count({ where: { approvalStatus: "PENDING" } }),
    ]);
    emitDashboardStats({ insideCount, outsideCount, pendingCount });

    res.json({
      success: true,
      message: "Exit auto-approved. Safe journey!",
      data: { logId: log.id, distanceMetres: Math.round(distanceMetres) },
    });
  } catch (err) {
    next(err);
  }
}

// POST /api/entry-exit/entry
// Rule: student must be OUTSIDE; must be near gate → creates PENDING log for admin
export async function requestEntry(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const studentId = req.user!.id;
    const { latitude, longitude } = req.body;

    const student = await prisma.student.findUnique({ where: { id: studentId } });
    if (!student) throw new AppError(404, "Student not found");
    if (student.currentStatus !== "OUTSIDE") {
      throw new AppError(400, "You are already inside campus");
    }

    await assertNoPendingRequest(studentId);

    const gate = await getActiveGate();
    const { isValid, isSuspicious, distanceMetres } = validateGateProximity(
      latitude,
      longitude,
      Number(gate.latitude),
      Number(gate.longitude),
      gate.radius
    );

    // Log regardless — even rejected attempts are stored
    const log = await prisma.entryExitLog.create({
      data: {
        studentId,
        deviceSessionId: req.user!.sessionId ?? null,
        requestType: "ENTRY",
        latitude,
        longitude,
        locationValid: isValid,
        suspicious: isSuspicious,
        approvalStatus: isValid ? "PENDING" : "REJECTED",
        approvalTime: isValid ? null : new Date(),
      },
    });

    if (!isValid) {
      if (isSuspicious) {
        emitSuspiciousAlert({
          logId: log.id,
          student: { id: studentId, name: student.name },
          distanceMetres: Math.round(distanceMetres),
          latitude,
          longitude,
        });
      }
      throw new AppError(
        400,
        `You are ${Math.round(distanceMetres)}m from the gate. Must be within ${gate.radius}m.`
      );
    }

    // Notify all admins in real-time
    const dept = await prisma.department.findUnique({ where: { id: student.departmentId } });
    emitNewEntryRequest({
      logId: log.id,
      student: { id: studentId, name: student.name, department: dept?.name ?? "—" },
      latitude,
      longitude,
      requestTime: log.requestTime,
    });

    res.status(201).json({
      success: true,
      message: "Entry request submitted. Waiting for admin approval.",
      data: { logId: log.id, distanceMetres: Math.round(distanceMetres) },
    });
  } catch (err) {
    next(err);
  }
}

// GET /api/entry-exit/my-history
export async function getMyHistory(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const logs = await prisma.entryExitLog.findMany({
      where: { studentId: req.user!.id },
      orderBy: { requestTime: "desc" },
      take: 50,
      select: {
        id: true,
        requestType: true,
        requestTime: true,
        approvalStatus: true,
        approvalTime: true,
        locationValid: true,
        suspicious: true,
        latitude: true,
        longitude: true,
      },
    });

    res.json({ success: true, message: "History fetched", data: logs });
  } catch (err) {
    next(err);
  }
}
