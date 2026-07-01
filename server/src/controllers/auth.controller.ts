import { Request, Response } from "express";
import * as authService from "../services/auth.service";
import { AuthRequest } from "../middleware/requireAuth";

export async function signup(
  req: Request,
  res: Response,
) {
  try {
    const result = await authService.signup(req.body);

    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Signup failed.",
    });
  }
}

export async function me(
  req: AuthRequest,
  res: Response,
) {
  const user = await authService.getCurrentUser(
    req.userId!,
  );

  res.json(user);
}