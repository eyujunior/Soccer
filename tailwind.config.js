module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(to bottom, rgba(0,0,0,.4), rgba(0,0,0,.3)), url('./assets/bg-hero.jpg')",
      },
      fontFamily: {
        sans: ["poppins", "roboto"],
      },
    },
  },
  plugins: [],
};
