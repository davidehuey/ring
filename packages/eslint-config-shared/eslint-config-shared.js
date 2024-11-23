import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import parser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import deprecation from 'eslint-plugin-deprecation'

export default tseslint.config(
  {
    ignores: [
      'release-*',
      'lib',
      'public',
      'build',
      'json-data',
      '.eslintrc.js',
      '.turbo',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierRecommended,
  {
    files: ['**/*.ts'],
    plugins: {
      prettier,
      deprecation,
    },
    languageOptions: {
      globals: globals.node,
      parser: parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      'comma-dangle': [2, 'only-multiline'],
      'no-cond-assign': [2, 'except-parens'],
      'no-console': 2,
      'no-constant-condition': 2,
      'no-control-regex': 0,
      'no-debugger': 2,
      'no-dupe-keys': 2,
      'no-dupe-class-members': 2,
      'no-duplicate-imports': 2,
      'no-empty': 2,
      'no-empty-character-class': 2,
      'no-ex-assign': 2,
      'no-extra-boolean-cast': 2,
      'no-extra-semi': 0,
      'no-func-assign': 2,
      'no-inner-declarations': 2,
      'no-invalid-regexp': 2,
      'no-irregular-whitespace': 2,
      'no-negated-in-lhs': 2,
      'no-obj-calls': 2,
      'no-regex-spaces': 2,
      'no-reserved-keys': 0,
      'no-sparse-arrays': 2,
      'no-unreachable': 2,
      'use-isnan': 2,
      'valid-jsdoc': 0,
      'valid-typeof': 2,
      'prefer-const': 2,

      'block-scoped-var': 0,
      complexity: 0,
      'consistent-return': 0,
      curly: [2, 'multi-line'],
      'default-case': 0,
      'dot-notation': 2,
      eqeqeq: 2,
      'guard-for-in': 0,
      'no-alert': 2,
      'no-caller': 2,
      'no-div-regex': 2,
      'no-else-return': 2,
      'no-eq-null': 2,
      'no-eval': 2,
      'no-extend-native': 2,
      'no-extra-bind': 2,
      'no-fallthrough': 2,
      'no-floating-decimal': 2,
      'no-implied-eval': 2,
      'no-iterator': 2,
      'no-labels': 2,
      'no-lone-blocks': 2,
      'no-loop-func': 2,
      'no-multi-spaces': 2,
      'no-multi-str': 0,
      'no-native-reassign': 0,
      'no-new': 0,
      'no-new-func': 2,
      'no-new-wrappers': 2,
      'no-octal': 0,
      'no-octal-escape': 0,
      'no-process-env': 0,
      'no-proto': 0,
      'no-redeclare': 2,
      'no-return-assign': 0,
      'no-script-url': 2,
      'no-self-compare': 2,
      'no-sequences': 2,
      'no-throw-literal': 2,
      'no-unused-expressions': 0,
      'no-void': 2,
      'no-warning-comments': 2,
      'no-with': 2,
      radix: 2,
      'vars-on-top': 0,
      'wrap-iife': 2,
      yoda: 0,

      'no-catch-shadow': 2,
      'no-delete-var': 2,
      'no-label-var': 2,
      'no-shadow': 2,
      'no-shadow-restricted-names': 2,
      'no-undef': 2,
      'no-undef-init': 2,
      'no-undefined': 0,
      'no-unused-vars': 0,
      'no-use-before-define': 2,

      strict: [2, 'never'],

      'handle-callback-err': 2,
      'no-mixed-requires': 2,
      'no-new-require': 2,
      'no-path-concat': 2,
      'no-process-exit': 0,
      'no-restricted-modules': 0,
      'no-sync': 0,

      'brace-style': [2, '1tbs'],
      camelcase: 0,
      'comma-spacing': [2, { before: false, after: true }],
      'comma-style': 2,
      'consistent-this': 0,
      'eol-last': 2,
      'func-names': 0,
      'func-style': 0,
      'key-spacing': [2, { beforeColon: false, afterColon: true }],
      'linebreak-style': [2, 'unix'],
      'max-nested-callbacks': [2, 4],
      'new-parens': 2,
      'no-array-constructor': 2,
      'no-inline-comments': 0,
      'no-lonely-if': 2,
      'no-mixed-spaces-and-tabs': 2,
      'no-multiple-empty-lines': [2, { max: 1 }],
      'no-nested-ternary': 0,
      'no-new-object': 2,
      'semi-spacing': [2, { before: false, after: true }],
      'no-spaced-func': 0,
      'no-ternary': 0,
      'no-trailing-spaces': 2,
      'no-underscore-dangle': 0,
      'one-var': [2, 'consecutive'],
      'operator-assignment': [2, 'always'],
      'padded-blocks': 0,
      'quote-props': 0,
      quotes: [2, 'single', 'avoid-escape'],
      semi: [2, 'never'],
      'sort-vars': 0,
      'keyword-spacing': [2, { before: true, after: true }],
      'space-before-blocks': [2, 'always'],
      'space-before-function-paren': 0,
      'object-curly-spacing': [2, 'always'],
      'array-bracket-spacing': [2, 'never'],
      'computed-property-spacing': [2, 'never'],
      'space-in-parens': [2, 'never'],
      'space-infix-ops': 2,
      'space-unary-ops': [2, { words: true, nonwords: false }],
      'spaced-line-comment': 0,
      'wrap-regex': 0,
      'require-await': 2,

      'no-var': 0,
      'generator-star': 0,

      'prettier/prettier': ['error'],
      '@typescript-eslint/camelcase': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-empty-interface': 0,
      '@typescript-eslint/no-floating-promises': 2,
      '@typescript-eslint/no-parameter-properties': 0,
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/no-use-before-define': 0,
      '@typescript-eslint/no-duplicate-enum-values': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-object-literal-type-assertion': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/no-unused-vars': 0,
      // '@typescript-eslint/no-unused-vars': [
      //   'error',
      //   { argsIgnorePattern: '^_' },
      // ],
      'deprecation/deprecation': 2,
    },
  },
)
