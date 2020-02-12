import 'dotenv/config';
import { Client, VoiceChannel } from 'discord.js'
import playAudio from './utils/play-audio'
import getVideoDetails from './utils/get-video-details'
import responses from './responses'
import isValidUrl from './utils/is-valid-url'
import getVideoUrl from './utils/get-video-url'

const client = new Client()
let joinedVoiceChannel = null

client.login(process.env.DISCORD_CLIENT_ID).catch(err => console.error(err));

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (responses[msg.content]) {
    msg.reply(responses[msg.content]);
  }
  else if (msg.content === '!join') {
    if (!msg.member) return;
    if (msg.member.voiceChannel) {
      joinedVoiceChannel = msg.member.voiceChannel;
      joinedVoiceChannel.join()
        .then(c => {
          msg.reply(`Joined ${joinedVoiceChannel.name}!`)
        })
    } else {
      msg.reply('You need to be in a voice channel first!');
    }
  } else if (msg.content.startsWith('!play ')) {
    if (joinedVoiceChannel?.connection) {
      if (isValidUrl(msg.content.split('!play ')[1])) {
        getVideoDetails(process.env.YOUTUBE_API_KEY, msg.content.split('!play ')[1])()
          .then(res => {
            const data = res.data.items[0];
            msg.reply(`Playing ${data.snippet.title}`);
          })
          .catch(err => console.error(err));
        playAudio(joinedVoiceChannel.connection, msg.content.split('!play ')[1]);
      } else {
        getVideoUrl(process.env.YOUTUBE_API_KEY, msg.content.split('!play ')[1])()
          .then(res => {
            const date = res.data
            debugger
          }).catch(err => console.error(err))
      }
    } else {
      msg.reply('I have not joined a voice channel. ☹️');
    }
  } else if (msg.content === '!leave') {
    if (joinedVoiceChannel) {
      msg.reply(`Disconnecting from ${joinedVoiceChannel.name}`);
      joinedVoiceChannel.leave();
    }
  }
})

