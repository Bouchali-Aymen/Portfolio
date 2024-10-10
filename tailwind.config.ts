import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "30px", // Default padding for large screens
          lg: "60px", // Padding when the screen is less than 1024px wide
        },
        center: true,
      },
      colors: {
        primary: "#1e7898",
        second: "#040711",
        background: "#101424",
      },
      padding: {
        section_padding: "100px",
      },
    },
  },
  plugins: [],
};

export default config;
