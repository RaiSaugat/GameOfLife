module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react"],
  rules: {
    strict: 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-use-before-define": ["error", { variables: false }],
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    // "react/prefer-stateless-function": "off",
    // "no-trailing-spaces": "off",
    // "no-tabs": 0,
    // "react/jsx-one-expression-per-line": 0,
    // "react/no-unescaped-entities": 0,
    // "arrow-body-style": 0,
    "react/destructuring-assignment": 0,
    "react/prop-types": 0,
    "react/no-unescaped-entities": 0
    // "react/button-has-type": 0,
    // "react/no-unused-state": 0,
    // "max-len": 0
  }
};
