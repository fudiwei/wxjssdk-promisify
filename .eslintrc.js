module.exports = {
    'extends': [
        'eslint:recommended'
    ],
    'env': {
        'es6': true,
        'browser': true,
        'node': true,
        'commonjs': true,
        'amd': true
    },
    'globals': {
        'wx': true
    },
    'parserOptions': {
        'ecmaVersion': 6
    },
    'rules': {
        'no-console': 'off',
        'no-extra-boolean-cast': 'off',
        'promise/avoid-new': 'off',
        'promise/no-return-wrap': 'off'
    }
};
