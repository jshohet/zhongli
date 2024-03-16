const { Message, Client, EmbedBuilder } = require("discord.js");
const quotes = require("../../assets/zhongli-quotes.json");

/**
 *
 * @param {Client} client
 * @param {Message} message
 */

module.exports = async (client, message) => {
  if (message.channel.name !== "zhongli") return;
  if (message.author.bot) return;

  try {
    const random = Math.floor(Math.random() * quotes.length);

    const embed = new EmbedBuilder()
      .setColor(0x0099ff)
      .setTitle(quotes[random].name)
      .setDescription(`"${quotes[random].quote}"`)
      .setImage(quotes[random].img);

    await message.channel.send({ embeds: [embed]});
  } catch (error) {
    console.log(error);
  }
};
