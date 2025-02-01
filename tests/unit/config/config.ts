import { Config } from 'jest';
import { rootDir } from '../../common/paths';
import {
  COVERAGE_DIR_NAME,
  MAIN_MODULES_MAP,
  TESTS_DIR_NAME,
  UNIT_TESTS_COVERAGE_DIR_NAME,
  UNIT_TESTS_POSTFIX,
} from '../../common/consts';

debugger;

const config: Config = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  rootDir,
  testRegex: `.*/${TESTS_DIR_NAME}/.*.${UNIT_TESTS_POSTFIX}.[jt]sx?$`,
  testEnvironment: 'node',
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(j|t)sx'],
  coverageDirectory: `${COVERAGE_DIR_NAME}/${UNIT_TESTS_COVERAGE_DIR_NAME}`,
  moduleNameMapper: {
    ...MAIN_MODULES_MAP,
  },
};

export default config;
