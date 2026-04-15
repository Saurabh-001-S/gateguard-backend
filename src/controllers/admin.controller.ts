import { Response, NextFunction } from "express";
import { prisma } from "../utils/prisma";
import { AppError } from "../middleware/errorHandler";
import { AuthRequest } from "../types";
import { emitRequestDecision, emitDashboardStats } from "../utils/socket";

// GET /api/admin/requests?status=PENDING
export async function getRequests(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const status = (req.query.status as string)?.toUpperCase() || "PENDING";

    const logs = await prisma.entryExitLog.findMany({
      where: { approvalStatus: status as any },
      orderBy: { requestTime: "asc" },
      include: {
        student: {
          select: {
            id: true,
            name: true,
            email: true,
            roomNo: true,
            currentStatus: true,
            department: { select: { name: true } },
          },
        },
        deviceSession: {
          select: { deviceName: true, ipAddress: true, deviceId: true },
        },
      },
    });

    res.json({ success: true, message: "Requests fetched", data: logs });
  } catch (err) {
    next(err);
  }
}

// PATCH /api/admin/requests/:logId/approve
export async function approveRequest(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const logId = parseInt(req.params.logId);
    const adminId = req.user!.id;

    const log = await prisma.entryExitLog.findUnique({ where: { id: logId } });
    if (!log) throw new AppError(404, "Request not found");
    if (log.approvalStatus !== "PENDING") {
      throw new AppError(400, "Request is no longer pending");
    }
    if (log.requestType !== "ENTRY") {
      throw new AppError(400, "Only ENTRY requests need admin approval");
    }

    await prisma.$transaction([
      prisma.entryExitLog.update({
        where: { id: logId },
        data: { approvalStatus: "APPROVED", adminId, approvalTime: new Date() },
      }),
      prisma.student.update({
        where: { id: log.studentId },
        data: { currentStatus: "INSIDE" },
      }),
    ]);

    // Notify the student and refresh admin dashboard counts
    const admin = await prisma.admin.findUnique({ where: { id: adminId } });
    emitRequestDecision(log.studentId, {
      logId,
      decision: "APPROVED",
      adminName: admin?.name ?? "Admin",
    });

    const [insideCount, outsideCount, pendingCount] = await Promise.all([
      prisma.student.count({ where: { currentStatus: "INSIDE" } }),
      prisma.student.count({ where: { currentStatus: "OUTSIDE" } }),
      prisma.entryExitLog.count({ where: { approvalStatus: "PENDING" } }),
    ]);
    emitDashboardStats({ insideCount, outsideCount, pendingCount });

    res.json({ success: true, message: "Entry approved. Student marked INSIDE." });
  } catch (err) {
    next(err);
  }
}

// PATCH /api/admin/requests/:logId/reject
export async function rejectRequest(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const logId = parseInt(req.params.logId);
    const adminId = req.user!.id;

    const log = await prisma.entryExitLog.findUnique({ where: { id: logId } });
    if (!log) throw new AppError(404, "Request not found");
    if (log.approvalStatus !== "PENDING") {
      throw new AppError(400, "Request is no longer pending");
    }

    await prisma.entryExitLog.update({
      where: { id: logId },
      data: { approvalStatus: "REJECTED", adminId, approvalTime: new Date() },
    });

    const admin = await prisma.admin.findUnique({ where: { id: adminId } });
    emitRequestDecision(log.studentId, {
      logId,
      decision: "REJECTED",
      adminName: admin?.name ?? "Admin",
    });

    const [insideCount, outsideCount, pendingCount] = await Promise.all([
      prisma.student.count({ where: { currentStatus: "INSIDE" } }),
      prisma.student.count({ where: { currentStatus: "OUTSIDE" } }),
      prisma.entryExitLog.count({ where: { approvalStatus: "PENDING" } }),
    ]);
    emitDashboardStats({ insideCount, outsideCount, pendingCount });

    res.json({ success: true, message: "Request rejected." });
  } catch (err) {
    next(err);
  }
}

// GET /api/admin/students
export async function getAllStudents(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { status, department } = req.query;

    const students = await prisma.student.findMany({
      where: {
        ...(status ? { currentStatus: status as any } : {}),
        ...(department ? { department: { name: department as string } } : {}),
      },
      select: {
        id: true,
        name: true,
        email: true,
        mobileNo: true,
        roomNo: true,
        gender: true,
        currentStatus: true,
        department: { select: { name: true } },
        sessions: {
          where: { isActive: true },
          select: { deviceName: true, lastSeen: true, ipAddress: true },
        },
      },
      orderBy: { name: "asc" },
    });

    res.json({ success: true, message: "Students fetched", data: students });
  } catch (err) {
    next(err);
  }
}

// GET /api/admin/students/:studentId/history
export async function getStudentHistory(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const studentId = parseInt(req.params.studentId);

    const logs = await prisma.entryExitLog.findMany({
      where: { studentId },
      orderBy: { requestTime: "desc" },
      take: 100,
      include: {
        admin: { select: { name: true } },
        deviceSession: { select: { deviceName: true, ipAddress: true } },
      },
    });

    res.json({ success: true, message: "History fetched", data: logs });
  } catch (err) {
    next(err);
  }
}

// GET /api/admin/dashboard
export async function getDashboard(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const [
      totalStudents,
      insideCount,
      outsideCount,
      pendingCount,
      suspiciousToday,
      recentLogs,
    ] = await prisma.$transaction([
      prisma.student.count(),
      prisma.student.count({ where: { currentStatus: "INSIDE" } }),
      prisma.student.count({ where: { currentStatus: "OUTSIDE" } }),
      prisma.entryExitLog.count({ where: { approvalStatus: "PENDING" } }),
      prisma.entryExitLog.count({
        where: {
          suspicious: true,
          requestTime: { gte: new Date(new Date().setHours(0, 0, 0, 0)) },
        },
      }),
      prisma.entryExitLog.findMany({
        take: 10,
        orderBy: { requestTime: "desc" },
        include: {
          student: { select: { name: true, department: { select: { name: true } } } },
        },
      }),
    ]);

    res.json({
      success: true,
      message: "Dashboard data",
      data: {
        stats: { totalStudents, insideCount, outsideCount, pendingCount, suspiciousToday },
        recentActivity: recentLogs,
      },
    });
  } catch (err) {
    next(err);
  }
}

// GET /api/admin/audit-logs
export async function getAuditLogs(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = Math.min(parseInt(req.query.limit as string) || 50, 100);
    const skip = (page - 1) * limit;

    const [total, logs] = await prisma.$transaction([
      prisma.entryExitLog.count(),
      prisma.entryExitLog.findMany({
        skip,
        take: limit,
        orderBy: { requestTime: "desc" },
        include: {
          student: { select: { name: true, email: true } },
          admin: { select: { name: true } },
          deviceSession: { select: { deviceName: true, ipAddress: true } },
        },
      }),
    ]);

    res.json({
      success: true,
      message: "Audit logs fetched",
      data: { logs, pagination: { page, limit, total, pages: Math.ceil(total / limit) } },
    });
  } catch (err) {
    next(err);
  }
}

// GET /api/admin/suspicious
export async function getSuspiciousActivity(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const logs = await prisma.entryExitLog.findMany({
      where: { suspicious: true },
      orderBy: { requestTime: "desc" },
      take: 50,
      include: {
        student: {
          select: {
            name: true,
            email: true,
            mobileNo: true,
            department: { select: { name: true } },
          },
        },
        deviceSession: {
          select: { deviceName: true, ipAddress: true, deviceId: true },
        },
      },
    });

    res.json({ success: true, message: "Suspicious activity", data: logs });
  } catch (err) {
    next(err);
  }
}
