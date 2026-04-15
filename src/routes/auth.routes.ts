import { Router } from "express";
import {
  registerStudent,
  loginStudent,
  logoutStudent,
  loginAdmin,
  getDepartments,
} from "../controllers/auth.controller";
import { authenticate, requireStudent } from "../middleware/auth";
import { validate } from "../middleware/validate";
import {
  registerStudentRules,
  loginStudentRules,
  loginAdminRules,
} from "../validators/auth.validators";

const router = Router();

router.get("/departments",                                           getDepartments);
router.post("/student/register", validate(registerStudentRules),    registerStudent);
router.post("/student/login",    validate(loginStudentRules),       loginStudent);
router.post("/student/logout",   authenticate, requireStudent,      logoutStudent);
router.post("/admin/login",      validate(loginAdminRules),         loginAdmin);

export default router;
