const pickup = require('../../assets/zhongli-pickup.json')

module.exports = {
  name: "pickup",
  description: "Get Zhongli to hit on you (they're kind of corny)",

  callback: (client, interaction) => {
    const random = Math.floor(Math.random() * pickup.length);

    interaction.reply(pickup[random]);
  },
};