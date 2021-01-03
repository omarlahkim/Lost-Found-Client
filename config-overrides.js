/* config-overrides.js */
const getCacheIdentifier = require('react-dev-utils/getCacheIdentifier');

module.exports = function override(config, env) {
  const isEnvDevelopment = env === 'development';
  const isEnvProduction = env === 'production';
  const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
  config.module = {
    ...config.module,
    rules: [
      ...config.module.rules,
      {
        test: /\.(js|mjs)$/,
        exclude: /@babel(?:\/|\\{1,2})runtime/,
        loader: require.resolve('babel-loader'),
        options: {
          babelrc: false,
          configFile: false,
          compact: false,
          presets: [
            ['module:metro-react-native-babel-preset'], // Add this line,
            [
              require.resolve('babel-preset-react-app/dependencies'),
              {helpers: true},
            ],
          ],
          cacheDirectory: true,
          // See #6846 for context on why cacheCompression is disabled
          cacheCompression: false,
          // @remove-on-eject-begin
          cacheIdentifier: getCacheIdentifier(
            isEnvProduction ? 'production' : isEnvDevelopment && 'development',
            [
              'babel-plugin-named-asset-import',
              'babel-preset-react-app',
              'react-dev-utils',
              'react-scripts',
            ],
          ),
          // @remove-on-eject-end
          // Babel sourcemaps are needed for debugging into node_modules
          // code.  Without the options below, debuggers like VSCode
          // show incorrect code and set breakpoints on the wrong lines.
          sourceMaps: shouldUseSourceMap,
          inputSourceMap: shouldUseSourceMap,
        },
      },
    ],
  };

  return config;
};
