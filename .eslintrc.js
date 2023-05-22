module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint: recommended',
    'plugin: prettier/recommended',
    'eslint-config-prettier'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    "prettier/prettier": ["error", {}, { "usePrettierrc": true }]
  },
};
