const setStartController = require('./start/index.js')
const setManagementController = require('./management/index.js')

module.exports = (bot) => {
    setStartController(bot)
    setManagementController(bot)
}
