const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        primary: "#003881",
        secondary: "#0D0C4E",
        accent: "#00E3BC",
      },
    },
  },

  plugins: [],
};

module.exports = config;
