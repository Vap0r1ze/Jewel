let e = module.exports = {}

const fs = require('fs')

e.dependencies = ['discordjs']

// e.init = function (Bot) {
//     Bot.client.on('message', msg => {
//     if (msg.content.startsWith(Bot.config.main.prefix)) {
//       if (!msg.channel.guild) return
//       if (msg.author.bot) return
//       let args = msg.content
//         .replace(Bot.config.main.prefix, '')
//         .split(/\s+/)
//         .filter(Boolean)
//       let command = args.shift().toLowerCase()
//       if (!/[\w\-]/.test(command)) return
//       if (fs.existsSync(`commands/${command}.js`)) {
//         let cmd = require(`../commands/${command}.js`)
//         Bot.util.logger.cmd(command, msg.author)
//         try {
//           if (e.checkperms(cmd.perms, msg.author)) {
//             cmd.run.bind(Bot)(msg, args)
//           } else {
//             msg.channel.send(`You must be a **${cmd.perms}** to do this!`)
//           }
//         } catch (err) {
//           Bot.util.logger.err('CMD', err)
//         }
//       }
//     }
//   })
// }