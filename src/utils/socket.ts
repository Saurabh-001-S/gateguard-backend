import { Server as HttpServer } from "http";
import { Server as SocketServer, Socket } from "socket.io";
import jwt from "jsonwebtoken";
import { AuthPayload } from "../types";

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret";

let io: SocketServer | null = null;

// ── Event names (single source of truth) ────────────────────────────────────
export const SOCKET_EVENTS = {
  // Server → client
  NEW_ENTRY_REQUEST:    "new_entry_request",    // admin panel: show new card
  REQUEST_DECISION:     "request_decision",     // student: approved / rejected
  STUDENT_STATUS_CHANGE:"student_status_change",// dashboard counter update
  SUSPICIOUS_ALERT:     "suspicious_alert",     // admin: red toast
  DASHBOARD_STATS:      "dashboard_stats",      // live stats refresh

  // Client → server (room management)
  JOIN_ADMIN_ROOM:   "join_admin_room",
  JOIN_STUDENT_ROOM: "join_student_room",
} as const;

// ── Rooms ───────────────────────────────────────────────────────────────────
const ADMIN_ROOM = "admins";
const studentRoom = (id: number) => `student:${id}`;

// ── Init (called once from src/index.ts) ────────────────────────────────────
export function initSocket(httpServer: HttpServer): SocketServer {
  io = new SocketServer(httpServer, {
    cors: { origin: "*", methods: ["GET", "POST"] },
    pingTimeout: 60000,
  });

  // Middleware: verify JWT on every socket connection
  io.use((socket: Socket, next) => {
    const token = socket.handshake.auth?.token as string | undefined;
    if (!token) return next(new Error("Authentication token required"));

    try {
      const payload = jwt.verify(token, JWT_SECRET) as AuthPayload;
      (socket as any).user = payload;
      next();
    } catch {
      next(new Error("Invalid or expired token"));
    }
  });

  io.on("connection", (socket: Socket) => {
    const user = (socket as any).user as AuthPayload;
    console.log(`[Socket] ${user.role} connected — id:${user.id} socket:${socket.id}`);

    // Auto-join rooms based on role
    if (user.role === "admin") {
      socket.join(ADMIN_ROOM);
      socket.emit("joined", { room: ADMIN_ROOM });
    }

    if (user.role === "student") {
      socket.join(studentRoom(user.id));
      socket.emit("joined", { room: studentRoom(user.id) });
    }

    socket.on("disconnect", () => {
      console.log(`[Socket] ${user.role}:${user.id} disconnected`);
    });
  });

  console.log("[Socket] Socket.io initialised");
  return io;
}

export function getIO(): SocketServer {
  if (!io) throw new Error("Socket.io not initialised — call initSocket() first");
  return io;
}

// ── Typed emitter helpers (used by controllers) ──────────────────────────────

/** Broadcast a new pending ENTRY request to all connected admins */
export function emitNewEntryRequest(payload: {
  logId: number;
  student: { id: number; name: string; department: string };
  latitude: number;
  longitude: number;
  requestTime: Date;
}) {
  getIO().to(ADMIN_ROOM).emit(SOCKET_EVENTS.NEW_ENTRY_REQUEST, payload);
}

/** Tell a specific student their request was approved or rejected */
export function emitRequestDecision(
  studentId: number,
  payload: { logId: number; decision: "APPROVED" | "REJECTED"; adminName: string }
) {
  getIO().to(studentRoom(studentId)).emit(SOCKET_EVENTS.REQUEST_DECISION, payload);
}

/** Broadcast updated dashboard counts to all admins */
export function emitDashboardStats(payload: {
  insideCount: number;
  outsideCount: number;
  pendingCount: number;
}) {
  getIO().to(ADMIN_ROOM).emit(SOCKET_EVENTS.DASHBOARD_STATS, payload);
}

/** Broadcast a suspicious activity alert to all admins */
export function emitSuspiciousAlert(payload: {
  logId: number;
  student: { id: number; name: string };
  distanceMetres: number;
  latitude: number;
  longitude: number;
}) {
  getIO().to(ADMIN_ROOM).emit(SOCKET_EVENTS.SUSPICIOUS_ALERT, payload);
}
