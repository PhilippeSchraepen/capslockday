var webpack = require('webpack');
var path = require('path');
var WebpackDevServer = require('webpack-dev-server');
var env = require('./server/env');
var devConfig = require('./webpack.config');
var isProduction = env.NODE_ENV === 'production';
var buildPath = path.resolve(__dirname, 'static');
console.log(buildPath);
var express = require('express');
var app = express();

if (!isProduction){
  new WebpackDevServer(webpack(devConfig),{
    publicPath: './static/',
    hot: true,
    stats: {
      colors: true
    },
    historyApiFallback: true
  }).listen(env.API_PORT, env.API_URL, function(err, result){
    if (err){
      console.log(err);
      return;
    }
    console.log('Environment: ' + env.NODE_ENV);
    console.log('Listening at ' + env.API_URL + ':' + env.API_PORT);
  })
} else {
  // point to the static assets
  app.use(express.static(buildPath));
  app.listen(env.API_PORT, function () {
    console.log('Environment: ' + env.NODE_ENV);
    console.log('Listening at ' + env.API_URL + ':' + env.API_PORT);
  });
}
