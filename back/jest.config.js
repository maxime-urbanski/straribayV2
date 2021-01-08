module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/webservice'],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};