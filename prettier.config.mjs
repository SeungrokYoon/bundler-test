/**
 * prettier.config.mjs
 * @description prettier config 공식문서에서 제공하는 예시
 */

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 120,
};

export default config;
