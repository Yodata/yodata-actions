'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * RemoveAction - object is removed from targetCollection
 *
 * @param {string|Object} object - The thing being removed
 * @param {string|Object} targetCollection
 *
 * @returns {Action}
 *
 */
var RemoveAction = function RemoveAction(object, targetCollection) {
  return new _action2.default({ type: 'RemoveAction', object: object, targetCollection: targetCollection });
};

exports.default = RemoveAction;