'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * AcceptAction - agent accepts object from the sender
 *
 * @param {string|Object} object The Thing being accepted
 * @param {string|Object} [sender] The Person or Org sending Thing
 *
 * @returns {Action}
 *
 * @example
 * let book = typed('Book','War and Peace')
 * // => {type: Book, name: War and Peace}
 *
 * let bob = typed('Person','Bob')
 * // => {type: Person, name: Bob}
 *
 * let action = AcceptAction(book, bob)
 * // => { type: AcceptAction, object: book, sender: bob }
 *
 */
var AcceptAction = function AcceptAction(object, sender) {
  return new _action2.default({ type: 'AcceptAction', object: object, sender: sender });
};

exports.default = AcceptAction;