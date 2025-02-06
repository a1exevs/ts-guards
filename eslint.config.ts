import eslintJs from '@eslint/js';
import { Linter } from 'eslint';
// @ts-ignore prettierConfig doesn't have @types support
import prettierConfig from 'eslint-config-prettier';
import tsEslint from 'typescript-eslint';

import languageOptions from './linter/language-options';
import plugins from './linter/plugins';
import absoluteImportPathRule from './linter/rules/absolute-import-path-rule';
import importOrderRule from './linter/rules/import-order-rule';
import sortImportsRule from './linter/rules/sort-imports-rule';
import unusedVarsRule from './linter/rules/unused-vars-rule';
import settings from './linter/settings';

const config: Linter.FlatConfig[] = [
  eslintJs.configs.recommended,
  ...tsEslint.configs.recommended,
  prettierConfig,
  {
    languageOptions,
    settings,
    plugins,
    rules: {
      ...unusedVarsRule,
      ...importOrderRule,
      ...sortImportsRule,
      ...absoluteImportPathRule,
    },
  },
  {
    // sources files
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'eslint-plugin-tsdoc/syntax': 'error',
      'no-restricted-imports': 'off',
    },
  },
  {
    // Tests config files
    files: ['tests/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
  {
    // linter config files
    files: ['linter/**/*.{ts,tsx}', 'eslint.config.ts'],
    rules: {
      'no-restricted-imports': 'off',
      '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
    },
  },
];
export default config;
