"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apiDispatcher = _interopRequireDefault(require("./api-dispatcher"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getVideoUrl = function getVideoUrl(key, query) {
  return (0, _apiDispatcher["default"])({
    method: 'get',
    url: '/search',
    params: {
      q: query,
      key: key,
      part: 'snippet'
    }
  });
};

var _default = getVideoUrl;
exports["default"] = _default;