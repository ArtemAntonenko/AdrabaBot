process.env.NTBA_FIX_319 = 1
const fs = require('fs');
const AdrabaLogo = fs.createReadStream('./assets/adraba-logo-2.png');

const TOKEN = process.env.TOKEN;
const TelegramBot = require('node-telegram-bot-api');

if(process.env.NODE_ENV === 'production') {
  bot = new TelegramBot(TOKEN);
  bot.setWebHook(process.env.HEROKU_URL + bot.TOKEN);
}
else {
  bot = new TelegramBot(TOKEN, { polling: true });
}

console.log('bot server started...');

bot.onText(/\/start/, async (msg, match) => {
  
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [{
          text: 'Start induction',
          callback_data: JSON.stringify({
            command: 'start-induction'
          })
        }]
      ]
    }
  };
  await bot.sendPhoto(msg.chat.id, AdrabaLogo)
  await bot.sendMessage(msg.chat.id, 'Welcome to Adraba!', opts)
});

module.exports = bot;