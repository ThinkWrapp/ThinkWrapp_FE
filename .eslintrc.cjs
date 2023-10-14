module.exports = {
    root: true,
    env: { browser: true, es6: true },
    extends: [
        'plugin:prettier/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
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
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
                paths: ['src'],
            },
            alias: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
                map: [
                    ['@react-three/fiber', './packages/fiber/src/web'],
                    ['@', './src'],
                ],
            },
        },
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'react/react-in-jsx-scope': 'off',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'import/export': 'error',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
        'react/no-unknown-property': 'off',
        '@react-three/no-clone-in-loop': 'warn',
        '@react-three/no-new-in-loop': 'warn',
    },
};
