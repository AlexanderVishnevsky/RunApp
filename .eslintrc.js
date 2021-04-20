module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:react/recommended'],
    plugins: ['react-hooks'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'template-curly-spacing': 'off',
        indent: 'off',
        'linebreak-style': 0,
        'global-require': 0,
        'eslint linebreak-style': [0, 'error', 'windows'],
        semi: ['error', 'always'],
        'max-lines': ['warn', 200],
        'max-lines-per-function': ['warn', 150],
        complexity: ['warn', 5],
        'max-nested-callbacks': ['warn', 2],
        'max-depth': ['warn', 3],
        'max-params': ['warn', 5],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/react-in-jsx-scope': 'off',
        'no-nested-ternary': 0, // ? ... : ... ? ... :
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/display-name': [0, { ignoreTranspilerName: true }],
    },
    globals: {
        React: 'writable',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
