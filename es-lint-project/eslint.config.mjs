import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    files: ['**/*.js'],
    plugins: {
      '@eslint-stylistic': stylistic
    },
    rules: {
      // Quotes: enforce single quotes
      '@eslint-stylistic/quotes': ['error', 'single'],

      // Semicolons: require semicolons
      '@eslint-stylistic/semi': ['error', 'always']
    }
  }
];
