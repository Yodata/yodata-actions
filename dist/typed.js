'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TypedObject = require('./TypedObject');

var _TypedObject2 = _interopRequireDefault(_TypedObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * returns a new TypedObject using type and name
 * @param {string} type
 * @param {string} name
 * @returns {TypedObject}
 */
var typed = function typed(type, name) {
  return (0, _TypedObject2.default)({ type: type, name: name });
};
exports.default = typed;