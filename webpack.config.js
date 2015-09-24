var path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require("compression-webpack-plugin");
var buildPath = path.resolve(__dirname, 'static');


module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8888',
      'webpack/hot/dev-server',
      './src/scripts/entry'
    ],
    output: {
      path: buildPath,
      publicPath: '/static/',
      filename: "bundle.js",
    },
    module: {
      preLoaders: [
        {test: /\.js$/, exclude: /node_modules/, loader: 'jshint-loader'}
      ],
      loaders: [
        // CSS
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?sourceMap',
          include: path.join(__dirname, 'src/style/')
        },
        // SASS
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader?resourceMap',
          include: path.join(__dirname, 'src/style/')
        },
        // images
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
          ],
          include: path.join(__dirname, 'src/img/')
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new webpack.optimize.DedupePlugin(),
      new CompressionPlugin()
    ],
    devtool: 'source-map',
};
