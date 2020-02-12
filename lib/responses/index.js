"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var greeting = function greeting() {
  return 'Hello 😊';
};

var _default = {
  hi: greeting(),
  hello: greeting(),
  ping: function ping() {
    return 'Pong';
  }
};
exports["default"] = _default;