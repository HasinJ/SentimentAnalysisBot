require('dotenv').config();
//const fs = require('fs');
const Discord = require('discord.js');
const ping = require('./commands/test.js')
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);
bot.commands = new Discord.Collection();

bot.commands.set("hasin", ping);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  let command = msg.content.toString().substring(1);

  if (bot.commands.has(command)) {
    const args = msg.content.split(/ +/);
    bot.commands.get(command)(bot,msg,args);
  }

  else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
});
