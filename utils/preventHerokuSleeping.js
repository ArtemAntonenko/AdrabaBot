var https = require("https");
const INTERVAL = 0.5 * 60 * 1000

module.exports = () => {
  setInterval(function() {
    console.log('Prevent sleeping')
    https.get(process.env.HEROKU_URL);
  }, INTERVAL)
};

