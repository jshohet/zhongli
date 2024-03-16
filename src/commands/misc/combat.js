const combat = require("../../assets/zhongli-combat.json");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "combat",
  description: "Random Zhongli combat voice line!",

  callback: async (client, interaction) => {
    try {
      await interaction.deferReply();

      const random = Math.floor(Math.random() * combat.length);

      const embed = new EmbedBuilder()
        .setColor(0x0099ff)
        .setTitle(combat[random].name)
        .setDescription(`"${combat[random].quote}"`)
        .setImage(combat[random].img);

      await interaction.editReply({ embeds: [embed] });
    } catch (error) {
      console.log(error);
    }
  },
};
