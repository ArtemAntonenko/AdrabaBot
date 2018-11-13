process.env.NTBA_FIX_319 = 1
const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '623206542:AAG-Us9W2uJkNpvtIbzfqisJDBIdIDQhsow';
const bot = new TelegramBot(TOKEN, {
    polling: true
});

const setListenersToBot = require('./controllers')

setListenersToBot(bot)