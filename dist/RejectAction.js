'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * RejectAction - agent rejects object from the sender
 *
 * @param {string|Object} object - The thing being rejected
 * @param {string|Object} [sender] The Person or Organization sending the object
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
 * let action = RejectAction(book, bob)
 * // => { type: RejectAction, object: book, sender: bob }
 *
 */
var RejectAction = function RejectAction(object, sender) {
  return new _action2.default({ type: 'RejectAction', object: object, sender: sender });
};

exports.default = RejectAction;