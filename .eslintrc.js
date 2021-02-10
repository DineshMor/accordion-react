module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-tabs": [
            2,
            {
                "allowIndentationTabs": true
            }
        ],
        "arrow-body-style": [
            0,
            "as-needed"
        ],
        "consistent-return": 0,
        "indent": [
            "error",
            4
        ],
        "comma-dangle": 0,
        "jsx-a11y/label-has-for": 0,
        "default-case": [
            0
        ],
        "complexity": [
            2,
            5
        ],
        "require-await": 2,
        "no-return-await": 2,
        "no-await-in-loop": 2,
        "react/jsx-pascal-case": [
            2,
            {
                "allowAllCaps": false,
                "ignore": [
                    "index"
                ]
            }
        ],
        "react/jsx-indent": [
            2,
            4
        ],
        "react/jsx-indent-props": [
            2,
            4
        ],
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-filename-extension": [
            2,
            {
                "extensions": [
                    ".js",
                    ".jsx"
                ]
            }
        ],
        "react/no-unknown-property": [
            2,
            {
                "ignore": [
                    "class"
                ]
            }
        ],
        "quotes": [2, "single", { "avoidEscape": true }],
        "react/boolean-prop-naming": [
            "error",
            {
                "rule": "^is[A-Z]([A-Za-z0-9]?)+"
            }
        ],
        "react/prop-types": 0
        // "import/no-extraneous-dependencies": [
        //     "error",
        //     {
        //         "devDependencies": false,
        //         "optionalDependencies": false,
        //         "peerDependencies": false
        //     }
        // ]
    }
};
