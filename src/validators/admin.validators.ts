import { param, query } from "express-validator";

export const logIdParamRules = [
  param("logId")
    .isInt({ min: 1 }).withMessage("logId must be a positive integer")
    .toInt(),
];

export const studentIdParamRules = [
  param("studentId")
    .isInt({ min: 1 }).withMessage("studentId must be a positive integer")
    .toInt(),
];

export const getRequestsQueryRules = [
  query("status")
    .optional()
    .isIn(["PENDING", "APPROVED", "REJECTED", "AUTO_APPROVED"])
    .withMessage("status must be PENDING | APPROVED | REJECTED | AUTO_APPROVED"),
];

export const auditLogQueryRules = [
  query("page")
    .optional()
    .isInt({ min: 1 }).withMessage("page must be a positive integer")
    .toInt(),

  query("limit")
    .optional()
    .isInt({ min: 1, max: 100 }).withMessage("limit must be between 1 and 100")
    .toInt(),
];

export const getStudentsQueryRules = [
  query("status")
    .optional()
    .isIn(["INSIDE", "OUTSIDE"])
    .withMessage("status must be INSIDE or OUTSIDE"),
];
