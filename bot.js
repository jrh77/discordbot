const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const prefix = "!"

client.once('ready', () => {
   console.log('Ready!');
})

client.on('message', message => {
   if (message.content === `${prefix}server`) {
      message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`)
   }  
})

client.login(config.token);

