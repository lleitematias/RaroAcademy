export default {
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/../__tests__/**/index.spec.ts'
  ],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
  coverageProvider: "v8",
  coverageReporters: [
    "text",
    "lcov",
  ],
  preset: 'ts-jest',
  testEnvironment: "node",
  testMatch: [
    "**/*.spec.ts"
  ]
};
