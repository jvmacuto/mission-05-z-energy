module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.(mjs|cjs)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!react-leaflet|leaflet)"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  moduleFileExtensions: ["js", "jsx", "mjs", "cjs"],
};
