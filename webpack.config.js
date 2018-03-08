const path = require('path');

const config = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },
  entry: {
    bundle:['babel-polyfill', './lib/renderers/dom.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-2']
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/, // you may add "vendor.js" here if you want to
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  }
};

module.exports = config;
