module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: { version: "detect" },
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "single"],
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": ["error"],
  },
};
