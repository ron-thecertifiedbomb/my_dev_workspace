
// jest.config.js
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',

  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'jest-esbuild',
  },
  // Add this for server components
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
};

export default createJestConfig(customConfig);