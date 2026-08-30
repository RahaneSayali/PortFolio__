import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background:     "rgb(var(--background) / <alpha-value>)",
        surface:        "rgb(var(--surface) / <alpha-value>)",
        border:         "rgb(var(--border) / <alpha-value>)",
        accent:         "rgb(var(--accent) / <alpha-value>)",
        "accent-light": "rgb(var(--accent-light) / <alpha-value>)",
        muted:          "rgb(var(--muted) / <alpha-value>)",
        foreground:     "rgb(var(--foreground) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "Menlo", "monospace"],
      },
      maxWidth: {
        content: "1280px",
      },
      letterSpacing: {
        tight: "-0.025em",
        tighter: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
