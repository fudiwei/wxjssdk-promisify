module.exports = {
    extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
    env: {
        es6: true,
        browser: true,
        node: true,
        commonjs: true,
        amd: true
    },
    globals: {
        wx: true
    },
    parserOptions: {
        ecmaVersion: 6
    },
    rules: {
        'prettier/prettier': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/triple-slash-reference': 'off'
    }
};
