process.env.NTBA_FIX_319 = 1
const TelegramBot = require('node-telegram-bot-api');

const token = '623206542:AAG-Us9W2uJkNpvtIbzfqisJDBIdIDQhsow';
const bot = new TelegramBot(token, {
    polling: true
});

bot.onText(/\/start/, (msg, match) => {
    console.log(msg);
    const opts = {
        reply_to_message_id: msg.message_id,
        reply_markup: JSON.stringify({
            keyboard: [
                ['price'],
                ['height']
            ],
            'one_time_keyboard': true
        })
    };
    if (msg.chat.type == "private")
        bot.sendMessage(msg.chat.id, 'Hi. I am MyETPBot. You can get the current price and blockchain height from the menu or ask for the balance of an address. Have fun!', opts);

});