module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb-typescript',
    'plugin:react/recommended',
    'prettier',
    'plugin:import/typescript',
  ],
  rules: {
    "indent": ["error", 2],
    "no-unused-vars": "warn",
    "import/no-anonymous-default-export": "off",
    "react/react-in-jsx-scope": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  settings: {
    'import/resolver': {
      typescript: {
        directory: './src',
        alias: {
          '@components': './src/components',
        },
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/external-module-folders': ['.yarn'],
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js',],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react-refresh',
    'react',
    'react-hooks',
    'prettier',
    '@typescript-eslint',
    'import',
  ],
  rules: {
    'import/no-unresolved': 'error',
    'react/react-in-jsx-scope': 'off',
    'import/no-commonjs': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/function-component-definition': 'off',
    'react-refresh/only-export-components': 'warn',
    'react/jsx-props-no-spreading': 'off',
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn"
    ]
  }
};
