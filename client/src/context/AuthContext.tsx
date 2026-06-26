import { createContext, useContext } from "react";

/**
 * AUTH SCAFFOLD ONLY — no implementation yet.
 *
 * This defines the *shape* of auth state the rest of the app will
 * consume, so pages/components can be written against a stable
 * interface before the real logic (signup/login, token storage,
 * session restoration) is built.
 */
export interface AuthUser {
  id: string;
  username: string;
  displayName: string;
}

export interface AuthContextValue {
  user: AuthUser | null;
  isLoading: boolean;
  // login, logout, signup intentionally omitted until implemented
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}

// AuthProvider implementation intentionally not included in the
// foundation phase — see docs/roadmap.md.
