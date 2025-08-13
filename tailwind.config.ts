import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "30px",
          lg: "60px",
        },
        center: true,
      },
      colors: {
        primary: "#1e7898",
        second: "#040711",
        background: "#101424",
        // Theme-aware colors
        'theme-bg-primary': 'var(--background-primary)',
        'theme-bg-secondary': 'var(--background-secondary)',
        'theme-text-primary': 'var(--text-primary)',
        'theme-text-secondary': 'var(--text-secondary)',
        'theme-text-muted': 'var(--text-muted)',
        'theme-border': 'var(--border-color)',
        'theme-accent': 'var(--accent-color)',
        'theme-accent-hover': 'var(--accent-hover)',
        'theme-card-bg': 'var(--card-bg)',
        'theme-card-border': 'var(--card-border)',
      },
      padding: {
        section_padding: "100px",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
};

export default config;
