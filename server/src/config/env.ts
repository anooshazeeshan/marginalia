/**
 * Centralized, typed access to environment variables.
 * Throwing early on missing required vars beats discovering
 * a misconfiguration deep inside a request handler later.
 */
function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const env = {
  port: process.env.PORT ?? "4000",
  nodeEnv: process.env.NODE_ENV ?? "development",
  // Uncomment once auth is implemented:
  // jwtSecret: requireEnv("JWT_SECRET"),
};
