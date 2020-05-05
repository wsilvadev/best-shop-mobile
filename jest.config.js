module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    'src/*.{ts,js}',
    '!**/node_modules/**',
    '!src/components/**/styles.ts',
    '!src/components/**/*.tsx',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@?react-navigation/?.*)',
  ],
  verbose: true,
};
