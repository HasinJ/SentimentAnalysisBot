

const hasin = (bot, msg, args) => {
  console.log("getting hasin...")
  let user = bot.users.find(user => user.username == "Hasin");
  if(user) msg.channel.send(user.toString());
  else msg.channel.send("error");
}

module.exports=hasin;

/*
module.exports={
  name:'something',
  description: "does something",
  execute(msg,args){
    message.channel.send('pong!');
  }
};
*/
