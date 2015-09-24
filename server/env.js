module.exports = {
  API_URL: process.env.API_URL || 'localhost',
  API_PORT: process.env.API_PORT || '8000',
  HEROKU_PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'local'
};
