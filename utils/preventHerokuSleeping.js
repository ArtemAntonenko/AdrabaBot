var https = require("https");
const INTERVAL = 15 * 60 * 1000

module.exports = () => {
  setInterval(function() {
    https.get(process.env.HEROKU_URL);
  }, INTERVAL)
};

