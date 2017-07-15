const { resolve, join } = require('path');
const webpack = require('webpack');

const config = {
  devtool: 'cheap-eval-source-map',
  context: resolve(__dirname, 'src'),
  entry: {
    home: [
      'webpack-hot-middleware/client',
      './clientRender.js'
    ]
  },
  output: {
    path: resolve(__dirname,'public/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
        ],
        exclude: '/node_modules/',
      },
      {
          test: /\.scss$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader",
              options: {
                  import: true,
                  importLoaders: 1,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
              }
          }, {
              loader: "sass-loader"
          }]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};

module.exports = config;
