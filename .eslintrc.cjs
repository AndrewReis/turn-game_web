/* eslint-disable key-spacing */
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    'prettier'
  ],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'prettier/prettier': 'error',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 'first',
        MemberExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        ArrayExpression: 1
      }
    ],
    'prefer-const': [
      'error',
      {
        ignoreReadBeforeAssign: false
      }
    ],
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'linebreak-style': 0,
    'key-spacing': ['error'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'no-loop-func': 'error',
    'no-undefined': 'error',
    'no-multi-assign': 'error',
    'no-duplicate-imports': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'vue/html-end-tags': 'error',
    'vue/multiline-html-element-content-newline': 2,
    'vue/html-closing-bracket-spacing': 2,
    'vue/html-closing-bracket-newline': 'error',
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0
      }
    ],
    'vue/html-quotes': 'error',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 20,
        multiline: {
          max: 20
        }
      }
    ]
  }
};
