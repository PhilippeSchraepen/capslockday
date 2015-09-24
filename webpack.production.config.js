var webpack = require('webpack');
var path = require('path');
var stylePath = path.resolve(__dirname, 'src', 'style');
var imgPath = path.resolve(__dirname, 'src', 'img');


module.exports = {
  devtool: 'source-map',
  entry: './src/scripts/entry',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/'
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
