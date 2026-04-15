import { Router } from "express";
import {
  getRequests,
  approveRequest,
  rejectRequest,
  getAllStudents,
  getStudentHistory,
  getDashboard,
  getAuditLogs,
  getSuspiciousActivity,
} from "../controllers/admin.controller";
import { authenticate, requireAdmin } from "../middleware/auth";
import { validate } from "../middleware/validate";
import {
  logIdParamRules,
  studentIdParamRules,
  getRequestsQueryRules,
  auditLogQueryRules,
  getStudentsQueryRules,
} from "../validators/admin.validators";

const router = Router();

router.use(authenticate, requireAdmin);

router.get("/dashboard",                                                    getDashboard);
router.get("/requests",          validate(getRequestsQueryRules),           getRequests);
router.patch("/requests/:logId/approve", validate(logIdParamRules),         approveRequest);
router.patch("/requests/:logId/reject",  validate(logIdParamRules),         rejectRequest);
router.get("/students",          validate(getStudentsQueryRules),           getAllStudents);
router.get("/students/:studentId/history", validate(studentIdParamRules),   getStudentHistory);
router.get("/audit-logs",        validate(auditLogQueryRules),              getAuditLogs);
router.get("/suspicious",                                                   getSuspiciousActivity);

export default router;
