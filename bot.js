process.env.NTBA_FIX_319 = 1
process.env.NTBA_FIX_350 = 1

const setManagementController = require('./bot-controllers/management/index.js')

const fs = require('fs');
const AdrabaLogo = fs.readFileSync('./assets/adraba-logo-2.png');

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

setManagementController(bot)

console.log('bot server started...');

bot.onText(/\/start/, async (msg, match) => {
  
  // const opts = {
  //   reply_markup: {
  //     inline_keyboard: [
  //       [{
  //         text: 'Start induction',
  //         callback_data: JSON.stringify({
  //           command: 'start-induction'
  //         })
  //       }]
  //     ]
  //   }
  // };
  await bot.sendPhoto(msg.chat.id, AdrabaLogo)
  await bot.sendMessage(msg.chat.id, 'Welcome to Adraba! \n /management')
});

module.exports = bot;