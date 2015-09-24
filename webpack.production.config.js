var webpack = require('webpack');
var path = require('path');
// var nodeModulesPath = path.resolve(__dirname, 'node_modules');
// var mainPath = path.resolve(__dirname, 'app', 'main.js');
var buildPath = path.resolve(__dirname, './static');
var stylePath = path.resolve(__dirname, 'src/style');
var imgPath = path.resolve(__dirname, 'src/img');

module.exports = {
  // We change to normal source mapping
  devtool: 'source-map',
  entry: './src/scripts/entry',
  output: {
    path: buildPath,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      // CSS
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap',
        include: stylePath
      },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?sourceMap',
        include: stylePath
      },
      // images
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ],
        include: imgPath
      }
    ]
  }
};
