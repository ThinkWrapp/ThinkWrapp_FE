module.exports = {
    root: true,
    env: { browser: true, es6: true },
    extends: [
        'prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@react-three/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
        },
        'import/resolver': {
            node: { extensions: ['.js', '.jsx', '.ts', '.tsx'], paths: ['src'] },
            alias: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
                map: [['@', './src']],
            },
        },
    },
    plugins: ['react-refresh', '@typescript-eslint', 'react', 'import', 'react-hooks', '@react-three', 'prettier'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        '@typescript-eslint/no-unused-vars': 'error',
        'no-unused-vars': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/no-unknown-property': 'off',
        'import/no-unresolved': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/no-named-as-default-member': 'off',
    },
};
