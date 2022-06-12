const path = require('path');
const alias = require('./config/alias');

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader'
        }
      ]
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      // your aliases
      ...alias
    };

    // Important: return the modified config
    return config;
  },
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts']
};
