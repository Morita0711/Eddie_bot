import { MessageEmbed } from 'discord.js'

export default {
  COMMAND_PREFIX: '!',
  defaultEmbed: () => {
    return new MessageEmbed()
      .setColor('#0099ff')
      .setTimestamp()
      .setFooter(
        'Our bot is Open Source, you can find it here https://github.com/eddiejaoude/EddieBot'
      )
  }
}
