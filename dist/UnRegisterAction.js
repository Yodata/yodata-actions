'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Unregister;

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * UnRegisterAction - the agent is no longer registered with the object (service).
 * @param {Person<Object>} agent
 * @param {Thing<Object>} object
 * @constructor ( agent, object)
 * @return {Action<Object>}
 */
function Unregister(agent, object) {
  return new _action2.default({ type: 'UnRegisterAction', agent: agent, object: object });
}