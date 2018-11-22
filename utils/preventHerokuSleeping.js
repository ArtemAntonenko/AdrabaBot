var http = require("http");
const INTERVAL = 15 * 60 * 1000

module.exports = () => {
  setInterval(function() {
    console.log('Prevent sleeping')
    http.get(process.env.HEROKU_URL);
  }, INTERVAL)
};

