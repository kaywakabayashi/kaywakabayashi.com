module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      // sans: [
      //   "VarelaRound-Regular",
      //   "Quicksand",
      //   "system-ui",
      //   "-apple-system",
      //   "BlinkMacSystemFont",
      //   '"Segoe UI"',
      //   "Roboto",
      //   '"Helvetica Neue"',
      //   "Arial",
      //   '"Noto Sans"',
      //   "sans-serif",
      //   '"Apple Color Emoji"',
      //   '"Segoe UI Emoji"',
      //   '"Segoe UI Symbol"',
      //   '"Noto Color Emoji"',
      // ],
      Monrope: ["Manrope", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
