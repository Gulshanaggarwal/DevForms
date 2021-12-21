module.exports = {
  mode:"jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:{
        "black-transparent":"rgba(0,0,0,0.8)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
