module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@react-three/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'package.json', 'yarn.lock'],
    parser: '@typescript-eslint/parser',
    settings: {
        react: {
            version: 'detect',
        },
        'import/extensions': ['.ts', '.tsx'],
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            node: { extensions: ['.ts', '.tsx'], paths: ['src'] },
            alias: {
                extensions: ['.ts', '.tsx', '.json'],
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
