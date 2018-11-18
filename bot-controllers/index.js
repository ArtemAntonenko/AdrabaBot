const setStartController = require('./start')
const setManagementController = require('./management')
const setInductionController = require('./induction')

module.exports = (bot) => {
    setStartController(bot)
    setManagementController(bot)
    setInductionController(bot)
}
