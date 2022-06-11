const path = require('path');
const alias = require('./config/alias');

module.exports = {
  webpack: (config) => {
    // Important: return the modified config
    config.resolve.alias = {
      ...config.resolve.alias,
      // your aliases
      ...alias
    };
    return config;
  }
};
