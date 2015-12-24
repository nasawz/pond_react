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
    publicPath: ''
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
        include: path.resolve(__dirname, 'app'),
        exclude: [/node_modules/, /phaser\.min\.js/],
        loaders: ['babel-loader']
      },
      {
        test: /\.jpe?g$|\.svg$|\.png$/,
        exclude: /node_modules/,
        loader: "file-loader?name=[path][name].[ext]"
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json"
      },
      {
        test: /\.json$/,
        include: path.join(__dirname, 'node_modules', 'pixi.js'),
        loader: 'json',
      }
    ],
    postLoaders: [
      {
        loader: "transform?brfs"
      }
    ]
  }
};
