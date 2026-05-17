/** @type {import("tailwindcss").Config} */
const config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff7ed",
          100: "#ffedd5",
          300: "#fdba74",
          500: "#f97316",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
      },
      boxShadow: {
        soft: "0 18px 60px rgba(124, 45, 18, 0.12)",
      },
    },
  },
};

export default config;
