"use strict";

require("dotenv/config");

var _discord = require("discord.js");

var _playAudio = _interopRequireDefault(require("./utils/play-audio"));

var _getVideoDetails = _interopRequireDefault(require("./utils/get-video-details"));

var _responses = _interopRequireDefault(require("./responses"));

var _isValidUrl = _interopRequireDefault(require("./utils/is-valid-url"));

var _getVideoUrl = _interopRequireDefault(require("./utils/get-video-url"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var client = new _discord.Client();
var joinedVoiceChannel = null;
client.login(process.env.DISCORD_CLIENT_ID)["catch"](function (err) {
  return console.error(err);
});
client.on('ready', function () {
  console.log("Logged in as ".concat(client.user.tag, "!"));
});
client.on('message', function (msg) {
  if (_responses["default"][msg.content]) {
    msg.reply(_responses["default"][msg.content]);
  } else if (msg.content === '!join') {
    if (!msg.member) return;

    if (msg.member.voiceChannel) {
      joinedVoiceChannel = msg.member.voiceChannel;
      joinedVoiceChannel.join().then(function (c) {
        msg.reply("Joined ".concat(joinedVoiceChannel.name, "!"));
      });
    } else {
      msg.reply('You need to be in a voice channel first!');
    }
  } else if (msg.content.startsWith('!play ')) {
    var _joinedVoiceChannel;

    if ((_joinedVoiceChannel = joinedVoiceChannel) === null || _joinedVoiceChannel === void 0 ? void 0 : _joinedVoiceChannel.connection) {
      if ((0, _isValidUrl["default"])(msg.content.split('!play ')[1])) {
        (0, _getVideoDetails["default"])(process.env.YOUTUBE_API_KEY, msg.content.split('!play ')[1])().then(function (res) {
          var data = res.data.items[0];
          msg.reply("Playing ".concat(data.snippet.title));
        })["catch"](function (err) {
          return console.error(err);
        });
        (0, _playAudio["default"])(joinedVoiceChannel.connection, msg.content.split('!play ')[1]);
      } else {
        (0, _getVideoUrl["default"])(process.env.YOUTUBE_API_KEY, msg.content.split('!play ')[1])().then(function (res) {
          var date = res.data;
          debugger;
        })["catch"](function (err) {
          return console.error(err);
        });
      }
    } else {
      msg.reply('I have not joined a voice channel. ☹️');
    }
  } else if (msg.content === '!leave') {
    if (joinedVoiceChannel) {
      msg.reply("Disconnecting from ".concat(joinedVoiceChannel.name));
      joinedVoiceChannel.leave();
    }
  }
});