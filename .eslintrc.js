module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@next/next/recommended",
    "next/core-web-vitals",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "prettier"
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/require-default-props": 0,
    "react/jsx-indent-props": 1,
    "react/jsx-props-no-spreading": 0,
    "react/no-unknown-property": 'error',
    "no-unused-vars": 1,
    'react/function-component-definition': 0,
    'react/destructuring-assignment': 0,
    'no-underscore-dangle': 0,
    'react/forbid-prop-types': 0,
    'import/no-unresolved': 2,
    'no-use-before-define': 'error',
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    // defaultProps rule to be deprecated on function components
    // https://github.com/reactjs/rfcs/pull/107
    "react/require-default-props": [
      "error",
      {
        "ignoreFunctionalComponents": true
      }
    ]
  }
};
