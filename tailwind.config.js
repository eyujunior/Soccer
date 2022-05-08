module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/bg-hero.jpg')",
      },
      fontFamily: {
        sans: ["poppins", "roboto"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
      },
    },
  },
  plugins: [],
};
