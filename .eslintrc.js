module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: ['eslint-plugin-prettier'],
    extends: ['plugin:react/recommended', 'prettier', 'react-app', 'react-app/jest'],
    rules: {
        'prettier/prettier': 'error',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'react/react-in-jsx-scope': 'off',
    },
};
