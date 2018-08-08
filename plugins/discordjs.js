let e = module.exports = {}

let Discord = require('discord.js')
let chalk = require('chalk')

e.init = function (Bot) {
  let token = process.env.BOT_TOKEN
  let client = Bot.client = new Discord.Client()
  Bot.on('init', () => {
    client.login(token)
  })
  Bot.client.on('ready', () => {
    let g = client.guilds.size
    let c = client.channels.size
    Bot.util.logger.log('DJS', chalk`Logged in as {cyan.bold ${client.user.username}#${client.user.discriminator}}`)
    Bot.util.logger.log('DJS', chalk`Currently in {green.bold ${g}} guild${g===1?'':'s'}`
      + chalk` and {green.bold ${c}} channel${c===1?'':'s'}`)
  })
}
