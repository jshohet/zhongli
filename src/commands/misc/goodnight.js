const goodnight = require("../../assets/zhongli-goodnight.json");

module.exports = {
  name: "goodnight",
  description: "Say goodnight to our great Lord of Geo",

  callback: (client, interaction) => {
    const random = Math.floor(Math.random() * goodnight.length);

    interaction.reply(goodnight[random]);
  },
};
