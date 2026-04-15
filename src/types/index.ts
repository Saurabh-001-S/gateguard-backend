import { Request } from "express";

export interface AuthPayload {
  id: number;
  role: "student" | "admin";
  email: string;
  sessionId?: number; // only for students
}

export interface AuthRequest extends Request {
  user?: AuthPayload;
}

export interface LocationBody {
  latitude: number;
  longitude: number;
  deviceId: string;
  deviceName: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}
