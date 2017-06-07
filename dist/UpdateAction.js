'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The result object is updated in targetCollection
 * @param {Object} result
 * @param {Object} targetCollection
 * @constructor
 */
var UpdateAction = function UpdateAction(result, targetCollection) {
  return new _action2.default({ type: 'UpdateAction', result: result, targetCollection: targetCollection });
};

exports.default = UpdateAction;