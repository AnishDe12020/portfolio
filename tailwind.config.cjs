const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: "#003881",
        secondary: "#0D0C4E",
        accent: "#00E3BC",
      },
      fontFamily: {
        serif: ["Ubuntu", ...defaultTheme.fontFamily.sans],
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
      },
    },
  },

  plugins: [],
};

module.exports = config;
