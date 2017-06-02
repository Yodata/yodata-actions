'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Object is unassigned from recipient
 *
 * @param {Object} object - the Thing being assigned
 * @param {Object} recipient - The receiving Person or Organization
 * @returns {Action}
 *
 */
var UnAssignAction = function UnAssignAction(object, recipient) {
  return (0, _action2.default)({ type: 'UnAssignAction', object: object, recipient: recipient });
};

exports.default = UnAssignAction;