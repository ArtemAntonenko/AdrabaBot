const managers = require('./managers')

const msgOptions = { parse_mode: "HTML", disable_notification: true }

module.exports = (bot) => {
    bot.onText(/\/management/, async (msg, match) => {
        await bot.sendMessage(msg.chat.id, getManagersList(), msgOptions)
    });

    bot.on('message', async (msg, match) => {
        const command = msg.text
        const manager = managers.find(manager => manager.command === command)
        if (manager) {
            await bot.sendPhoto(msg.chat.id, manager.photo)
            await bot.sendMessage(msg.chat.id, getManagerInfo(manager), msgOptions)
        }
    });
}

function getManagersList() {
    return managers.reduce((acc, manager) => {
        acc = `${acc}${manager.command} - ${manager.name} \n\n`
        return acc
    }, '<b>Adraba Managers:</b>\n\n')
}

function getManagerInfo(manager) {
    return `<b>${manager.name}</b>
     \n<b>${manager.position}</b>
     \n\n${manager.about}
     \n${getManagersList()}`
}