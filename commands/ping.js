let e = module.exports = {}

e.desc = 'Ping pong ding dong wow'

e.run = function (msg) {
  msg.channel.createMessage(`<@${msg.author.id}>, Pong!`)
}
