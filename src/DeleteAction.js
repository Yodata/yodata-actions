import Action from './action'

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
const deleteAction = (object, targetCollection) =>
  Action({ type: 'DeleteAction', object, targetCollection });

export default deleteAction
