'use strict';

var isEmpty = require('../helpers/isEmpty');

var setKeys = require('../helpers/setKeys');

var dataGet = require('../helpers/dataGet');

module.exports = function filled() {
  var _this = this;

  var valueFilled = function valueFilled(key) {
    return isEmpty(dataGet(_this.data, key)) === false;
  };

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return setKeys(this, args).has().every(valueFilled);
};