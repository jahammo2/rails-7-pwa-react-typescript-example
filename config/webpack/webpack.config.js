const { merge, webpackConfig } = require('shakapacker');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';

let updatedConfig = webpackConfig;

const customConfig = {
  resolve: {
    extensions: ['.css', '.scss']
  }
}

updatedConfig = merge(updatedConfig, customConfig);

// if (isDevelopment && inliningCss) {
//   updatedConfig.plugins.push(
//     new ReactRefreshWebpackPlugin({
//       overlay: {
//         sockPort: webpackConfig.devServer.port,
//       },
//     })
//   );
// }

console.log('updatedConfig', updatedConfig);
module.exports = updatedConfig;
