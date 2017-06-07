'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * RegisterAction - The agent<Person> is registered for object<Thing>
 * @param {string|Object} object
 * @param {string|Object} agent
 * @returns {Action}
 *
 */
var RegisterAction = function RegisterAction(object, agent) {
  return (0, _action2.default)({ type: 'RegisterAction', object: object, agent: agent });
};

exports.default = RegisterAction;