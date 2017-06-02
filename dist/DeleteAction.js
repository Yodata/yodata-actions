'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * deleteAction - Agent deletes object from targetCollection
 *
 * @param {string|Object} object - the object being added to the collection
 * @param {string|Object} targetCollection - the target collection or URL
 * @returns {Action}
 *
 * @example
 * let bob = {type: 'Person', name: 'bob'}
 * let contacts = {type:'Collection', name: 'contacts'
 * let action = DeleteAction(bob, contacts)
 * // => { type: 'DeleteAction', object: bob, targetCollection: contacts
 *
 */
var deleteAction = function deleteAction(object, targetCollection) {
  return (0, _action2.default)({ type: 'DeleteAction', object: object, targetCollection: targetCollection });
};

exports.default = deleteAction;