var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var env = require('./server/env');
var devConfig = require('./webpack.config');
var isProduction = env.NODE_ENV === 'production';
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
  app.listen(port, function () {
    console.log('Environment: ' + env.NODE_ENV);
    console.log('Listening at ' + env.API_URL + ':' + env.API_PORT);
  });
}
