process.env.NTBA_FIX_319 = 1
const TelegramBot = require('node-telegram-bot-api');

const token = '623206542:AAG-Us9W2uJkNpvtIbzfqisJDBIdIDQhsow';
const bot = new TelegramBot(token, {
    polling: true
});

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
    await bot.sendPhoto(msg.chat.id, 'https://s.dou.ua/CACHE/images/img/static/companies/adraba/37bbf291dd5cfe382a230a5de3a885f7.png')
    await bot.sendMessage(msg.chat.id, 'Welcome to Adraba!', opts)
});