const fs = require('fs');
const AdrabaLogo = fs.readFileSync('./assets/adraba-logo-2.png');  

module.exports = (bot) => {
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
        await bot.sendMessage(msg.chat.id,
             '<b>Welcome to Adraba!</b> \nCommands: \n\n/managers - Adraba Managers \n\n/induction - For newcomers',
             { parse_mode: "HTML" })
    });
}