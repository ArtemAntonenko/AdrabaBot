const inductionSteps = require('./induction-steps')

const commands = {
  inductionStepFinished: 'inductionStepFinished'
}

module.exports = (bot) => {
  bot.onText(/\/induction/, async (msg) => {
    sendStepMessage({ bot, msg, step: 1 })
  })

  bot.on("callback_query", (callbackQuery) => {
    const data = JSON.parse(callbackQuery.data)
    if (data.command === commands.inductionStepFinished) {
      const msg = callbackQuery.message
      sendStepMessage({
        bot,
        msg,
        callbackQueryId: callbackQuery.id,
        step: ++data.inductionStep
      })
    }
  })
}

function getKeyboardOptions({ step = 1 }) {
  if (step === inductionSteps.length) {
    return {}
  } else {
    return {
      reply_markup: {
        inline_keyboard: [[
          {
            text: 'Got It',
            callback_data: JSON.stringify({
              command: commands.inductionStepFinished,
              inductionStep: step
            })
          }
        ]]
      },
      disable_notification: true
    }
  }
}

function getStepText({ step = 1 }) {
  return inductionSteps[--step].text
}

function sendStepMessage({ bot, msg, callbackQueryId, step = 1 }) {
  if (step <= inductionSteps.length) {
    if (callbackQueryId) {
      bot.editMessageReplyMarkup(
        { inline_keyboard: [[]] },
        { chat_id: msg.chat.id, message_id: msg.message_id })
    }

    bot.sendMessage(
      msg.chat.id,
      getStepText({ step }),
      getKeyboardOptions({ step })
    )
  }
}
