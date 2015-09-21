var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:8888',
      'webpack/hot/dev-server',
      './src/scripts/entry'
    ],
    output: {
      path: __dirname,
      filename: "bundle.js",
      publicPath: '/static/'
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
          test: /\.png$/,
          loader: "file-loader",
          include: path.join(__dirname, 'src/img/')
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    ],
    devtool: 'source-map'
};
