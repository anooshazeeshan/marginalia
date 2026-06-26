import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Foundation-only config: aliases mirror tsconfig "paths" above.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@marginalia/shared": path.resolve(__dirname, "../shared"),
    },
  },
  server: {
    port: 5173,
  },
});
