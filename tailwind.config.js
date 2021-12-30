module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "rgb(180, 64, 125)",
        secondary: "rgb(40, 103, 168)",
        thirdary: "rgb(15, 15, 15)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
