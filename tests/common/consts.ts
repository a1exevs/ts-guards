export const TESTS_DIR_NAME = 'specs';
export const COVERAGE_DIR_NAME = '.coverage';
export const UNIT_TESTS_POSTFIX = 'spec.unit';
export const UNIT_TESTS_COVERAGE_DIR_NAME = 'unit-tests';
export const MAIN_MODULES_MAP = {
  'src/(.*)$': '<rootDir>/src/$1',
} as const;
