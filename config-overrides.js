/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = function override(config, env) {
  config.plugins.push(
    new PreloadWebpackPlugin({
      rel: 'preload',
      as: 'font',
      include: 'allAssets',
      fileWhitelist: [/(.woff?)/i],
    }),
  );

  return config;
};
