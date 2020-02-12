"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apiDispatcher = _interopRequireDefault(require("./api-dispatcher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getDetails = function getDetails(key, videoUrl) {
  var videoId = new URL(videoUrl).searchParams.get('v');
  return (0, _apiDispatcher["default"])({
    method: 'get',
    url: '/videos',
    params: {
      key: key,
      id: videoId,
      part: 'snippet'
    }
  });
};

var _default = getDetails;
exports["default"] = _default;