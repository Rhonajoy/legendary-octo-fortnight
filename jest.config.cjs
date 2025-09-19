/* eslint-env node */
/* eslint-disable @typescript-eslint/no-require-imports */

const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.app.json');

/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.app.json',
      useESM: true,
      babelConfig: true,
      plugins: ['ts-jest-mock-import-meta'],
     setupFiles: ['dotenv/config'],
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true, tsconfig: 'tsconfig.app.json' }],
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
};
