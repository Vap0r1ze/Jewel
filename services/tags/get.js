let e = module.exports = {}
e.run = async function () {
  var args = []
  for (var arg of this.args) {
    args.push(await this.process(arg, this))
  }
  let name = args[0]
  let fallback = args[1]
  if (!name) return '`Invalid variable name`'
  return (await this.db.hgetAsync(`tags:${this.tag}:vars:${this.msg.channel.guild.id}`, name)) || fallback || ''
}
