"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var customerSchema = new _mongoose.Schema({
  name: String,
  surname: String,
  imgURL: String,
  createdBy: String,
  updatedBy: String
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)("Customer", customerSchema);

exports["default"] = _default;