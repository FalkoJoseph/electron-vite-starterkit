/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0FAFC",
          100: "#E3F7FC",
          200: "#BAE9F7",
          300: "#91D8F2",
          400: "#48B3E8",
          500: "#028ade",
          600: "#0275C7",
          700: "#0259A6",
          800: "#014385",
          900: "#002D63",
          950: "#001940",
        },
      },
    },
  },
  plugins: [],
};
