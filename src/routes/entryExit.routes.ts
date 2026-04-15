import { Router } from "express";
import {
  requestExit,
  requestEntry,
  getMyHistory,
} from "../controllers/entryExit.controller";
import { authenticate, requireStudent } from "../middleware/auth";
import { validate } from "../middleware/validate";
import { exitRules, entryRules } from "../validators/entryExit.validators";

const router = Router();

router.use(authenticate, requireStudent);

router.post("/exit",       validate(exitRules),  requestExit);
router.post("/entry",      validate(entryRules), requestEntry);
router.get("/my-history",                        getMyHistory);

export default router;
