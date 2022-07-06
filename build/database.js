"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_mongoose["default"].connect(_config["default"].MONGODB_URI).then(function (db) {
  return console.log("DB is connected");
})["catch"](function (err) {
  return console.log(err);
});