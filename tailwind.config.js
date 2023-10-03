/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F9FC",
          100: "#E6F5FC",
          200: "#BCE2F7",
          300: "#96CCF2",
          400: "#4F9BE8",
          500: "#0b62df",
          600: "#0A56C7",
          700: "#0741A6",
          800: "#042F85",
          900: "#021F63",
          950: "#011140",
        },
      },
    },
  },
  plugins: [],
};
