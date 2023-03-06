module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/require-default-prop': 'off',
    "vue/multi-word-component-names": "off",
    'vue/no-mutating-props': 0,
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error"
  },
  extends: ['./.eslintrc-auto-import.json','plugin:vue/vue3-essential', 'eslint:recommended', 'eslint-config-prettier', 'plugin:@typescript-eslint/recommended'
],
}
