const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const { Collection, Client } = require("discord.js");
const { RichEmbed  } = require('discord.js');

client.commands = new Collection();
client.queue = new Map()
client.config = {
	prefix: ',' //Set your prefix
}

fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Evento caricato: "+eventName)
  });
});

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    client.commands.set(commandName, props);
    console.log("Comando caricato: "+commandName)
  });
});




const Embed = new Discord.MessageEmbed()
     .setColor("#0099ff")
     .setTitle("Comandi del nostro bot")
     .setAuthor("MusicPlus")
     .setDescription("Lista dei comandi")
     .setThumbnail("https://cdn.discordapp.com/attachments/820348911185166426/828664542116053052/Logo_Tavola_disegno_1.png")
     .addFields(
         { name: "Music", value: ",play/(soon: ,stop/,skip)", inline: true},
         { name: "Help", value: ",help", inline: true}
    )
     
     .setImage("https://cdn.discordapp.com/attachments/820348911185166426/828664542116053052/Logo_Tavola_disegno_1.png")
     .setFooter("AnimePlus_")
     .setTimestamp();

client.on("message", (message) => {
    if (message.content == ",help") {
        message.channel.send(Embed);
    }
});

//Logging in to discord
client.login(my token)
