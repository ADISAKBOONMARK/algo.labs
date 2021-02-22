module.exports = {
    env: {
        jest: true,
    },
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    extends: ['standard', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': ['error', { singleQuote: true }],
        'no-unused-vars': 'warn',
        'handle-callback-err': 0,
    },
};
