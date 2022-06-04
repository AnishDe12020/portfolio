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
      boxShadow: {
        commandButton: "0 0 0 3px hsl(0 0% 30%)",
      },
      fontFamily: {
        web3: ["Syncopate", "sans-serif"],
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.300"),
            "h1, h2, h3, h4, h5, h6": {
              color: theme("colors.gray.100"),
              strong: theme("colors.gray.100"),
              fontWeight: theme("fontWeight.bold"),
            },
            h1: {
              fontSize: theme("fontSize.3xl"),
              marginBottom: theme("spacing.8"),
              marginTop: theme("spacing.8"),
            },
            h2: {
              fontSize: theme("fontSize.2xl"),
              marginBottom: theme("spacing.8"),
              marginTop: theme("spacing.8"),
            },
            h3: {
              fontSize: theme("fontSize.xl"),
              marginBottom: theme("spacing.6"),
              marginTop: theme("spacing.6"),
            },
            h4: {
              fontSize: theme("fontSize.lg"),
              marginBottom: theme("spacing.6"),
              marginTop: theme("spacing.6"),
            },
            h5: {
              fontSize: theme("fontSize.lg"),
              marginBottom: theme("spacing.4"),
              marginTop: theme("spacing.4"),
            },
            h6: {
              fontSize: theme("fontSize.lg"),
              marginBottom: theme("spacing.4"),
              marginTop: theme("spacing.4"),
            },
             "--tw-prose-code": theme("colors.red[300]"),
            "--tw-prose-bold": theme("colors.accent"),
            "--tw-prose-quotes": theme("colors.accent"),
          },
        },
      }),
      
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
