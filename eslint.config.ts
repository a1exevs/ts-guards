import eslintJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import { Linter } from 'eslint';

import languageOptions from './linter/language-options';
import settings from './linter/settings';
import plugins from './linter/plugins';
import unusedVarsRule from './linter/rules/unused-vars-rule';
import importOrderRule from './linter/rules/import-order-rule';
import sortImportsRule from './linter/rules/sort-imports-rule';
import absoluteImportPathRule from './linter/rules/absolute-import-path-rule';
// @ts-ignore
import prettierConfig from 'eslint-config-prettier';

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
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  },
];
export default config;
