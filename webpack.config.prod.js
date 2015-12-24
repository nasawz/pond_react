var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(png|jpg)$/,
        loaders: ['url?limit=100000'],
        include: path.join(__dirname, 'assets')
      },

      // pixi uses fs.readFileSync and require()s json files
      {
        test: /\.js[x]?$/,
        loaders: ['transform?brfs'],
        include: /node_modules/
      },
      {
        test: /\.json$/,
        loaders: ['json']
      }
    ]
  }
};
