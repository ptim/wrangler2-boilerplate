/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

/**
 * https://miniflare.dev/testing/jest
 *
 * Adapted from @see https://github.com/cloudflare/miniflare-typescript-esbuild-jest
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  globals: {
    'ts-jest': {
      tsconfig: 'test/tsconfig.json',
      useESM: true,
    },
  },
  testEnvironment: 'miniflare',
}
