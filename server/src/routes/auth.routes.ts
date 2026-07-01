import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { requireAuth } from "../middleware/requireAuth";

const router = Router();

router.post(
  "/signup",
  authController.signup,
);

router.get(
  "/me",
  requireAuth,
  authController.me,
);

export default router;