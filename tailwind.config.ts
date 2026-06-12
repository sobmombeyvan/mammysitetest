import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1A242F",
          dark: "#121820",
          light: "#2A3544",
        },
        gold: {
          DEFAULT: "#C5A059",
          light: "#D4B06A",
          dark: "#A8863F",
        },
        cream: {
          DEFAULT: "#F5F1E9",
          light: "#FAF7F2",
          dark: "#EBE5D9",
        },
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
