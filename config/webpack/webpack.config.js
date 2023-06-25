const { merge, webpackConfig } = require('shakapacker');

let updatedConfig = webpackConfig;

const customConfig = {
  resolve: {
    extensions: ['.css', '.scss']
  }
}

updatedConfig = merge(updatedConfig, customConfig);

module.exports = updatedConfig;
