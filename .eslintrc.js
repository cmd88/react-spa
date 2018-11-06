module.exports = {
    env: {
        "browser": true,
        "node": true,
        "jest": true
    },
    extends: ["airbnb",
        "plugin:react/recommended",
        "plugin:jest/recommended"
    ],
    "parser": "babel-eslint",
    "rules": {
        "no-mixed-operators": 0,
        "import/no-unresolved": 0,
        "react/jsx-one-expression-per-line": 0,
        "import/no-named-as-default": 0,
        "import/prefer-default-export": 0,
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": [0],
        "no-unused-expressions": 2,
        "class-methods-use-this": [0],
        "no-console": 0,
        "max-len": [
            2,
            110,
            2,
            {
                "ignoreUrls": true,
                "ignoreComments": false,
                "ignoreTemplateLiterals": true
            }
        ],
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                "components": ["Link"],
                "specialLink": ["hrefLeft", "hrefRight"],
                "aspects": ["invalidHref", "preferButton"]
            }
        ],
        "no-param-reassign": [2, { "props": false }],
        "arrow-parens": 0,
        "no-underscore-dangle": 0,
        "camelcase": 0,
        "no-confusing-arrow": 0,
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "always-multiline",
            "exports": "always-multiline",
            "functions": "ignore"
        }]
    }
};