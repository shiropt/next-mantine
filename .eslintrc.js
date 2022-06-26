module.exports = {
  extends: ["next/core-web-vitals", "plugin:jest-dom/recommended"],
  plugins: ["jest-dom", "testing-library"],
  overrides: [
    {
      files: ["./src/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  rules: {
    "no-unused-vars": "warn",
  },
};
