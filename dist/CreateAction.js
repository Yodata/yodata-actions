'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Agent creates result - optionally with participant using instrument
 *
 * @param {Object} result - the Thing being created
 * @param {Object} agent - the Person that creates or produces the Object
 * @example
 * {
 *   @context: http://schema.org/
 *   @type: 'CreateAction'
 *   result {
 *      @type: Person
 *      name: Bob
 *   },
 */
function CreateAction(result, agent) {
  return (0, _action2.default)({ type: 'CreateAction', result: result, agent: agent });
}

exports.default = CreateAction;