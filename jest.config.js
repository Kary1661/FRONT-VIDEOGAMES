module.exports = {
  testEnvironment: 'node',

    transformIgnorePatterns: [
      // Ignore files with non-JavaScript extensions
      '<rootDir>/node_modules/', // Ignore node_modules
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$',
    ],
    setupFilesAfterEnv: ['./jest.setup.js'],
  };
  