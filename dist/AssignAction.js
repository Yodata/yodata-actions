'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Object is assigned to to the recipient, by agent
 * @param {string|Object} object
 * @param {string|Object} recipient
 * @returns {Action}
 * @example
 * // bob is assigned to alice
 * let bob = tn('Person', 'Bob');
 * let alice = tn('Person', 'Alice')
 * let action = AssignAction(bob, alice)
 * // => {type: AssignAction, object: bob, recipient alice}
 */
function AssignAction(object, recipient) {
  return (0, _action2.default)({ type: 'AssignAction', object: object, recipient: recipient });
}

exports.default = AssignAction;