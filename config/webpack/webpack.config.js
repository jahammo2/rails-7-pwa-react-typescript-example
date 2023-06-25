const { merge, webpackConfig } = require('shakapacker');
const path = require('path');

const srcDir = path.resolve(__dirname, '../../app/javascript/src');

let updatedConfig = webpackConfig;

const customConfig = {
  resolve: {
    alias: {
      ...updatedConfig.resolve.alias,
      src : srcDir,
    },
    extensions: ['.css', '.scss']
  }
}

updatedConfig = merge(updatedConfig, customConfig);

module.exports = updatedConfig;
