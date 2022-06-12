const path = require('path');
const alias = require('./config/alias');
const mdxRules = require('./config/mdxRules');

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      ...mdxRules(options)
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
