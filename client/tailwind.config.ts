import type { Config } from "tailwindcss";

// Placeholder palette/typography — to be replaced once the
// brand & design language (paper/ink palette, serif + sans pairing)
// is finalized. Intentionally minimal for the foundation phase.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF7F0",
        ink: "#2B2A28",
      },
      fontFamily: {
        serif: ["Source Serif 4", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
