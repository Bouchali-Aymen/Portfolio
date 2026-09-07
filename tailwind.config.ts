import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1.25rem",
          lg: "2rem",
        },
        center: true,
        screens: {
          "2xl": "1200px",
        },
      },
      colors: {
        primary: "#14b8a6",
        second: "#0b1220",
        background: "#0b1220",
        "theme-bg-primary": "var(--background-primary)",
        "theme-bg-secondary": "var(--background-secondary)",
        "theme-text-primary": "var(--text-primary)",
        "theme-text-secondary": "var(--text-secondary)",
        "theme-text-muted": "var(--text-muted)",
        "theme-border": "var(--border-color)",
        "theme-accent": "var(--accent-color)",
        "theme-accent-hover": "var(--accent-hover)",
        "theme-card-bg": "var(--card-bg)",
        "theme-card-border": "var(--card-border)",
      },
      padding: {
        section_padding: "var(--section-padding)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        roboto: ["var(--font-body)"],
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
