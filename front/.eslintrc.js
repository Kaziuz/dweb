module.exports = {
    "extends": ["standard", "plugin:react/recommended", "mocha"],
    "env": {
      "jest": true,
    },
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true,
      },
      "plugins": [
        "import",
        "react"
      ]
    },
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "semi": [2, "never"],
      "prefer-const": "error",
      "comma-dangle": ["error", "always-multiline"],
    }
  };
  