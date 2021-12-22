const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: "#0C1226",
        secondary: "#141C38",
        accent: "#7AC9F9",
      },
      fontFamily: {
        serif: ["Ubuntu", ...defaultTheme.fontFamily.sans],
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
      },
    },
  },

  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
