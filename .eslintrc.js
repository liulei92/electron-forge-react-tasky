module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'off',
      'windows'
    ],
    'no-extra-semi': 2,
    'no-undef': 0,
    'no-unsafe-finally': 2,
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-whitespace-before-property': 2,
    'prefer-const': 2,
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'space-before-function-paren': [2, 'never'], // 函数定义时括号前面要不要有空格
    'spaced-comment': [
      2,
      'always',
      {
        markers: [
          'global',
          'globals',
          'eslint',
          'eslint-disable',
          '*package',
          '!',
          ','
        ]
      }
    ],
    camelcase: [
      0,
      {
        properties: 'never'
      }
    ],
    '@typescript-eslint/camelcase': [
      0,
      {
        properties: 'never'
      }
    ],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'comma'
        },
        singleline: {
          delimiter: 'comma'
        }
      }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true
      }
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      2,
      {
        args: 'none'
      }
    ],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off'
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.scss',
          '.less'
        ]
      }
    }
  }
};