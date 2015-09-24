var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var env = require('./server/env');
var devConfig = require('./webpack.config');
var express = require('express');
var app = express();
var isProduction = env.NODE_ENV === 'production';

if (!isProduction){
  new WebpackDevServer(webpack(devConfig),{
    publicPath: './static/',
    hot: true,
    stats: {
      colors: true
    },
    historyApiFallback: true
  }).listen(env.PORT, env.URL, function(err, result){
    if (err){
      console.log(err);
      return;
    }
    console.log('Environment: ' + env.NODE_ENV);
    console.log('Listening at ' + env.URL + ':' + env.PORT);
  })
} else {
  // point to the static assets
  app.use(express.static(__dirname));
  app.listen(env.PORT, function(){
    console.log('Environment: ' + env.NODE_ENV);
    console.log('Listening at ' + env.PORT);
  });
}
