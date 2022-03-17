module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'airbnb',
  ],
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [
          'node_modules',
          'src/',
        ],
      },
    },
    'import/extensions': [
      '.js',
      '.jsx'
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/function-component-definition': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'comma-dangle': 'off',
    'no-use-before-define': 'off',
    camelcase: 'off',
    'import/no-cycle': 'off',
    'no-restricted-syntax': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never'
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
  },
};
