const random = (bot, msg, args) => {
  let channels = Array.from(msg.guild.channels)
    .map(element => element.pop())
    .filter(channel => channel.type=="voice");
  //console.log(channels[Math.floor(Math.random()*channels.length)]);
  let channel = channels[Math.floor(Math.random()*channels.length)];
  //console.log(msg.member);
  msg.channel.send(`Moving to... "${channel.name}"`)
  msg.member.setVoiceChannel(channel).catch(err => {
    console.log(err);
    msg.channel.send(err.toString().split(":")[1]);
  });

}

exports.run=random;
exports.name='moveme';
