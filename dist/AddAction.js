'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * AddAction - Object is added to targetCollection
 *
 * @param {string|Object} object - the thing being added
 * @param {string|Object} targetCollection the collection receiving the object
 *
 * @returns {Action}
 *
 * @example
 * let book = typed('Book','War and Peace')
 * // => {type: Book, name: War and Peace}
 *
 * let collection = typed('List','MyBookList')
 * // => {type: List, name: MyBookList}
 *
 * let action = AddAction(book, collection)
 * // => { type: AddAction, object: book, targetCollection: MyBookList }
 *
 */
function AddAction(object, targetCollection) {
  return (0, _action2.default)({ type: 'AddAction', object: object, targetCollection: targetCollection });
}
exports.default = AddAction;