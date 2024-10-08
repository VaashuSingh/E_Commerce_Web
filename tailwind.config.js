/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        pink: {
          light: "#D1FAE5",
          DEFAULT: "#DB2777",
          dark: "#BE185D",
        },
        blue: {
          light: "#5885AF",
          DEFAULT: "#1E2A5E",
          dark: "#1A1D23",
        },
        dark: {
          100: "#282c34",
          200: "#505257",
          300: "#3e4042",
          400: "#282c34",
          500: "#404246",
          600: "#2e3137", //rgb(46 49 55)
          700: "#37393D", //rgb(55 57 61)
        },
      },
    },
  },
  plugins: [],
};
