"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/';

var dispatcher = function dispatcher(_ref) {
  var method = _ref.method,
      params = _ref.params,
      url = _ref.url;
  return (0, _axios["default"])({
    baseURL: BASE_YOUTUBE_API_URL,
    url: url,
    method: method,
    params: params
  });
};

var _default = dispatcher;
exports["default"] = _default;