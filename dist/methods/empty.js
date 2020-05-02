'use strict';

var isEmpty = require('../helpers/isEmpty');

var dataGet = require('../helpers/dataGet');

var setKeys = require('../helpers/setKeys.js');

module.exports = function empty() {
  var _this = this;

  var emptyValue = function emptyValue(key) {
    return isEmpty(dataGet(_this.data, key));
  };

  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return setKeys(this, properties).has().some(emptyValue);
};