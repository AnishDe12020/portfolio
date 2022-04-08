module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "google",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "object-curly-spacing": [2, "always"],
    quotes: [2, "double", { avoidEscape: true }],
    "no-undef": "off",
    "require-jsdoc": "off",
    "new-cap": "off",
  },
};
