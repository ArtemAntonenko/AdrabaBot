process.env.NTBA_FIX_319 = 1
const TOKEN = process.env.TOKEN;
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(TOKEN, {
    polling: true
});

const setListeners = require('./controllers')

setListeners(bot)