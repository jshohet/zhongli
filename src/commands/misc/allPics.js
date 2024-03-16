module.exports = {
    name: "allpics",
    description: "see all possible pictures on imgur",

    callback: (client, interaction) =>{
        interaction.reply(
          "See all Zhongli pictures here: https://imgur.com/gallery/tmZnJiV ."
        );
    }
}