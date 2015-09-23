var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
new WebpackDevServer(webpack(config),{
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true
  },
  historyApiFallback: true
}).listen(8080, '188.166.65.173', function(err, result){
  if (err){
    console.log(err);
    return;
  }
  console.log('Listening at 188.166.65.173:8080');
})
