const managers = require('./managers')

module.exports = (bot) => {
    bot.onText(/\/management/, async (msg, match) => {
        await bot.sendPhoto(msg.chat.id, managers.CEO.photo)
        await bot.sendMessage(msg.chat.id, managers.CEO.about, { parse_mode: "HTML" })
        
        await bot.sendPhoto(msg.chat.id, managers.COO.photo)
        await bot.sendPhoto(msg.chat.id, managers.HRDirector.photo)
        await bot.sendPhoto(msg.chat.id, managers.HeadOfProjects.photo)
        await bot.sendPhoto(msg.chat.id, managers.Advisor.photo)
        // await bot.sendMessage(msg.chat.id, 'Welcome to Adraba! \n /management')
    });
}