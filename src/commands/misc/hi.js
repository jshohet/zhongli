const hi = require('../../assets/zhongli-hi.json')

module.exports={
    name: "hi",
    description: "Say hi to Zhongli!",

    callback: (client, interaction) =>{

    const random = Math.floor(Math.random() * hi.length);

        interaction.reply(hi[random]);
    }
}