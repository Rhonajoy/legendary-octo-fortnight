import { pathsToModuleNameMapper } from 'ts-jest';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { compilerOptions } = require('./tsconfig.app.json');

/** @type {import('jest').Config} */
export default {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest.json',
      useESM: true,
      babelConfig: true,
      diagnostics: { ignoreCodes: [1343] },
      astTransformers: {
        before: [
          {
            path: 'ts-jest-mock-import-meta',
            options: {
              metaObjectReplacement: {
                env: { VITE_MOVIE_API_KEY: 'test_key' },
                url: 'http://localhost',
              },
            },
          },
        ],
      },
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      { useESM: true, tsconfig: 'tsconfig.jest.json' },
    ],
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
