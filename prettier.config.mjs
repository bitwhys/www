/** @type {import("prettier").Config} */
export default {
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
