const Discord = require('discord.js');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png')
.setDescription(`>>> ${client.user} kullanırken lütfen \`@${client.user.username}\` rolünü en yukarıda tutunuz!

**Davet İçin:** [Buraya tıkla](https://discord.com/api/oauth2/authorize?client_id=810175682855698434&permissions=8&scope=bot)
\`\`\`https://discord.com/api/oauth2/authorize?client_id=810175682855698434&permissions=8&scope=bot\`\`\`

**Destek Sunucusu İçin:** [Buraya tıkla](https://discord.gg/8Z8mGynxgX)
\`\`\`https://discord.gg/8Z8mGynxgX\`\`\`

**Botun Yapımcısının Youtube Discord Sunucusu:** [Buraya tıkla](https://discord.gg/EpK8HvN3D5)
\`\`\`https://discord.gg/EpK8HvN3D5\`\`\``));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'davet'
};