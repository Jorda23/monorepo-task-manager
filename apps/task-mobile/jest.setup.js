// jest.setup.js
global.setImmediate = setTimeout;
global.clearImmediate = clearTimeout;

jest.mock('@react-native-async-storage/async-storage', () => ({
    __esModule: true,
    default: jest.requireActual('@react-native-async-storage/async-storage/jest/async-storage-mock'),
  }));
  