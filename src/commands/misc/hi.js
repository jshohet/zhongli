const hi = require("../../assets/zhongli-hi.json");

module.exports = {
  name: "hi",
  description: "Say hi to Zhongli!",

  callback: async (client, interaction) => {
    await interaction.deferReply();
    const random = Math.floor(Math.random() * hi.length);

    const today = new Date();

    if (today.getDate() === 11 && today.getMonth() === 5) {
      await interaction.editReply(
        "Such as the diamonds embedded within the mountains outlasting routine decay and erosion, your existence too, my dear friend, adds beauty and permanence to this transient world. On this auspicious day of your birth's anniversary, I wish you countless blessings equivalent to the unceasing grains of golden sand by the sea. Happy birthday to you."
      );
    } else {
      await interaction.editReply(hi[random]);
    }
  },
};
