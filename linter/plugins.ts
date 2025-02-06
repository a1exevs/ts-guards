import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
// @ts-ignore importPlugin doesn't have @types support
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import tsDocPlugin from 'eslint-plugin-tsdoc';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';

const plugins = {
  '@typescript-eslint': tsEslintPlugin,
  'eslint-plugin-tsdoc': tsDocPlugin,
  prettier: prettierPlugin,
  import: importPlugin,
  'unused-imports': unusedImportsPlugin,
};

export default plugins;
