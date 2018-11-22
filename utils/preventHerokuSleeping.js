var http = require("http");
const INTERVAL = 0.5 * 60 * 1000

module.exports = () => {
  setInterval(function() {
    console.log('Prevent sleeping')
    http.get(process.env.HEROKU_URL);
  }, INTERVAL)
};

