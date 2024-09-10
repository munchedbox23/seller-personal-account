module.exports = {
  testEnvironment: "jsdom",
  clearMocks: true,
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  moduleDirectories: ["node_modules"],
  modulePaths: ["<rootDir>src"],
  coveragePathIgnorePatterns: ["\\\\node_modules\\\\"],
  setupFilesAfterEnv: ["<rootDir>/config/util/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  maxWorkers: 1,
};
