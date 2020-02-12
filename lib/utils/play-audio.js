"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ytdlCore = _interopRequireDefault(require("ytdl-core"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var streamOptions = {
  seek: 0,
  volume: 1
};

var playAudio = function playAudio(connection, link) {
  var stream = (0, _ytdlCore["default"])(link, {
    filter: 'audioonly'
  });
  connection.playStream(stream, streamOptions);
};

var _default = playAudio;
exports["default"] = _default;