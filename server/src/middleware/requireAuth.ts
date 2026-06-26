import type { Request, Response, NextFunction } from "express";

/**
 * SCAFFOLD ONLY. Once implemented, this middleware will verify the
 * JWT from the Authorization header and attach the authenticated
 * user to `req`. Currently a pass-through placeholder so route files
 * can reference it without breaking the build.
 */
export function requireAuth(_req: Request, _res: Response, next: NextFunction) {
  // TODO: verify JWT, attach req.user, or respond 401
  next();
}
