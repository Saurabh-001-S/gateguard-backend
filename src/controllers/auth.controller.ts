import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../utils/prisma";
import { AppError } from "../middleware/errorHandler";
import { AuthRequest } from "../types";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

// POST /api/auth/student/register
export async function registerStudent(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { email, password, name, mobileNo, roomNo, gender, departmentId } =
      req.body;

    const existing = await prisma.student.findUnique({ where: { email } });
    if (existing) throw new AppError(409, "Email already registered");

    const dept = await prisma.department.findUnique({
      where: { id: departmentId },
    });
    if (!dept) throw new AppError(404, "Department not found");

    const hashed = await bcrypt.hash(password, 12);

    const student = await prisma.student.create({
      data: { email, password: hashed, name, mobileNo, roomNo, gender, departmentId },
      select: { id: true, email: true, name: true, currentStatus: true },
    });

    res.status(201).json({ success: true, message: "Registered", data: student });
  } catch (err) {
    next(err);
  }
}

// POST /api/auth/student/login
export async function loginStudent(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { email, password, deviceId, deviceName, latitude, longitude, ipAddress } =
      req.body;

    const student = await prisma.student.findUnique({ where: { email } });
    if (!student) throw new AppError(401, "Invalid credentials");

    const valid = await bcrypt.compare(password, student.password);
    if (!valid) throw new AppError(401, "Invalid credentials");

    // ── Device session: enforce single active session ──────────────────────
    // Deactivate any other active sessions for this student on different devices
    await prisma.deviceSession.updateMany({
      where: { studentId: student.id, isActive: true, deviceId: { not: deviceId } },
      data: { isActive: false },
    });

    // Upsert session for this student+device pair
    const session = await prisma.deviceSession.upsert({
      where: { studentId_deviceId: { studentId: student.id, deviceId } },
      create: {
        studentId: student.id,
        deviceId,
        deviceName,
        ipAddress: ipAddress ?? req.ip ?? "unknown",
        latitude,
        longitude,
        isActive: true,
      },
      update: {
        isActive: true,
        lastSeen: new Date(),
        ipAddress: ipAddress ?? req.ip ?? "unknown",
        latitude,
        longitude,
      },
    });

    const token = jwt.sign(
      { id: student.id, role: "student", email: student.email, sessionId: session.id },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN } as jwt.SignOptions
    );

    res.json({
      success: true,
      message: "Login successful",
      data: {
        token,
        student: {
          id: student.id,
          name: student.name,
          email: student.email,
          currentStatus: student.currentStatus,
        },
        sessionId: session.id,
      },
    });
  } catch (err) {
    next(err);
  }
}

// POST /api/auth/student/logout
export async function logoutStudent(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (req.user?.sessionId) {
      await prisma.deviceSession.update({
        where: { id: req.user.sessionId },
        data: { isActive: false },
      });
    }
    res.json({ success: true, message: "Logged out" });
  } catch (err) {
    next(err);
  }
}

// POST /api/auth/admin/login
export async function loginAdmin(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { email, password } = req.body;

    const admin = await prisma.admin.findUnique({ where: { email } });
    if (!admin) throw new AppError(401, "Invalid credentials");

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) throw new AppError(401, "Invalid credentials");

    const token = jwt.sign(
      { id: admin.id, role: "admin", email: admin.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN } as jwt.SignOptions
    );

    res.json({
      success: true,
      message: "Admin login successful",
      data: { token, admin: { id: admin.id, name: admin.name, email: admin.email } },
    });
  } catch (err) {
    next(err);
  }
}

// GET /api/auth/departments  (public — needed for register form)
export async function getDepartments(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const departments = await prisma.department.findMany({
      orderBy: { name: "asc" },
      select: { id: true, name: true },
    });
    res.json({ success: true, message: "Departments", data: departments });
  } catch (err) {
    next(err);
  }
}
