import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        blue: "#18489A",
        selected: "#347469",
        hoverBlue: "#ECF0F7",
        pressedBlue: "#E2E8F2",
        purple: "#9747FF",
        green: "#4FE8B7",
        white: "#FEFEFF",
        "light-grey": "#F7F7F9",
        border: "#D9DBDE",
        grey: "#AEB1B7",
        "dark-grey": "#5D6470",
        black: "#1e1e1e",
        error: "#d9454b",
        success: "#15CC8A",
        hoverRed: "#fa104814",
        pressedRed: "#fa10481f",
        design: "#FFE8E8",
        disabled: "#E1E4EA",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
