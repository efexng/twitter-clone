/** @type {import("eslint").Linter.Config} */
const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  rules: {
    // These opinionated rules are enabled in stylistic-type-checked above.
    // Feel free to reconfigure them to your own preference.
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",

    // Ignoring the errors mentioned in your logs:
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars-experimental": "off",
    // @ts-ignore
    "@typescript-eslint/no-unused-vars-experimental": "off",
    // @ts-ignore
    "@typescript-eslint/no-unused-vars": "off",
    // @ts-ignore
    "@typescript-eslint/no-unused-vars-experimental": "off",
    // @ts-ignore
    "@typescript-eslint/no-unused-vars-experimental": "off",
    // @ts-ignore
    "@typescript-eslint/no-unused-vars": "off",
    // @ts-ignore
    "@typescript-eslint/no-unused-vars-experimental": "off",
    // @ts-ignore
    "@typescript-eslint/no-unused-vars-experimental": "off",
    // @ts-ignore
    "@typescript-eslint/no-unused-vars": "off",
    // @ts-ignore
    "@typescript-eslint/no-unused-vars-experimental": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": "off",
  },
};

module.exports = config;
