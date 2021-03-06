let express = require('express');
let packageInfo = require('./package.json');
let bodyParser = require('body-parser');
const preventHerokuSleeping =  require('./utils/preventHerokuSleeping')

let app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json({ version: packageInfo.version });
});

let server = app.listen(process.env.PORT, function () {
  let host = server.address().address;
  let port = server.address().port;
  
  console.log('Web server started at http://%s:%s', host, port);
  console.dir('server.address()', server.address())
});

module.exports = function (bot) {
  app.post('/' + bot.token, function (req, res) {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
  preventHerokuSleeping()
};