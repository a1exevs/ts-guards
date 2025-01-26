import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  rootDir: './',
  testRegex: `(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$`,
  testEnvironment: 'node',
  transform: {
    '^.+\\.[jt]sx?$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(j|t)sx'],
  coverageDirectory: `.coverage`,
  moduleNameMapper: {
    'src/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
