module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'key-spacing': ['error', {
      afterColon  : true,
      align       : 'colon',
      beforeColon : true,
      mode        : 'minimum',
    }],
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
