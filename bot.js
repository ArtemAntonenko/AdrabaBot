process.env.NTBA_FIX_319 = 1
process.env.NTBA_FIX_350 = 1

const setupBotControllers = require('./bot-controllers/index.js')

// const TOKEN = process.env.TOKEN;
const TOKEN = '623206542:AAG-Us9W2uJkNpvtIbzfqisJDBIdIDQhsow';
const TelegramBot = require('node-telegram-bot-api');
let bot

if(process.env.NODE_ENV === 'production') {
  console.log('Case 1')
  bot = new TelegramBot(TOKEN);
  const webhookUrl = process.env.HEROKU_URL + bot.TOKEN
  console.log('webhookUrl', webhookUrl)
  bot.setWebHook(webhookUrl);
}
else {
  console.log('Case 2')
  bot = new TelegramBot(TOKEN, { polling: true });
}

setupBotControllers(bot)

console.log('bot server started...');

module.exports = bot;