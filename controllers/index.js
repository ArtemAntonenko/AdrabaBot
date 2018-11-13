const fs = require('fs');
const AdrabaLogo = fs.createReadStream('./assets/adraba-logo-2.png');

module.exports = (bot) => {
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
}
