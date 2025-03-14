/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest/presets/js-with-ts-esm-legacy',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@test/(.*)$': '<rootDir>/test/$1',
  },
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  transformIgnorePatterns: [
      "node_modules/(?!express-beans)"
  ],
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
};
