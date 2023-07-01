const { merge, webpackConfig } = require('shakapacker');
const path = require('path');

const srcDir = path.resolve(__dirname, '../../app/javascript/src');

let updatedConfig = webpackConfig;

module.exports = {
  test : /\.scss$/,
  use  : [
    {
      loader: 'fast-sass-loader'
    },
    {
      loader  : 'sass-resources-loader',
      options : {
        resources: 'app/javascript/src/styles/globallyAvailable.scss',
      },
    },
  ],
};

const scssRuleIndex = updatedConfig.module.rules.findIndex((rule) => rule.test.toString().includes('scss'));
const scssRule = updatedConfig.module.rules[scssRuleIndex];

updatedConfig.module.rules[scssRuleIndex] = {
  test: scssRule.test,
  use: [
    ...scssRule.use,
    {
      loader: 'sass-resources-loader',
      options: {
        resources: 'app/javascript/src/ui/styles/index.scss',
      },
    },
  ],
};

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
