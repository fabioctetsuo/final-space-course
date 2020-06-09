module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  rules: {
    strict: ['error', 'never'],
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
};