import Card from "./src/Components/Cards/Card";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        30: "30deg",
      },
      fontSize: {
        card: ["16px", "22px"],
      },
    },
  },
  plugins: [],
};
