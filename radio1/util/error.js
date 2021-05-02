const { MessageEmbed } = require("discord.js")

module.exports = async (text, channel) => {
    await channel.send(text)
}