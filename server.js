var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var env = require('./server/env');

new WebpackDevServer(webpack(config),{
  publicPath: config.output.publicPath,
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
