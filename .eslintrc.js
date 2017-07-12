module.exports = {
  "root": true,
  "ecmaFeatures": {
    "modules": true,
    "experimentalObjectRestSpread": true,
    "jsx": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": [
    "airbnb"
  ],
  "globals": {
    "window": true,
    "document": true
  },
  "rules": {
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }
    ],
    "indent": [
      "error",
      4,
      {
        "SwitchCase": 1
      }
    ],
    "jsx-a11y/anchor-has-content": "warn",
    "react/jsx-boolean-value": [
      "error",
      "always"
    ],
    "react/jsx-indent": [
      "error",
      4
    ],
    "react/jsx-indent-props": [
      "error",
      4
    ],
    "react/forbid-prop-types": [
      "error",
      {
        "forbid": [
          "any"
        ]
      }
    ],
    "react/prefer-stateless-function": [
      0
    ],
    "import/extensions": [
      0
    ],
    "no-console": [
      "error",
      {
        "allow": [
          "warn",
          "error"
        ]
      }
    ]
  }
};
