module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#010101",
        secondary: "#131313",
        tertiary: "#222222",
        accent: "#f3f3f3",
      },
    },
    boxShadow: {
      commandButton: "0 0 0 3px hsl(0 0% 30%)",
    },
  },
  plugins: [],
};
