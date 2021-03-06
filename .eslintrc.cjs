module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'linebreak-style': 0,
    'func-names': ['error', 'as-needed'],
    'no-console': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error']
  }
};
