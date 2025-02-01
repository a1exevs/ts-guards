import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
// @ts-ignore
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

const plugins = {
  '@typescript-eslint': tsEslintPlugin,
  prettier: prettierPlugin,
  import: importPlugin,
  'unused-imports': unusedImportsPlugin,
};

export default plugins;
