import Action from './action'

/**
 * deleteAction - Agent deletes object from targetCollection
 *
 * @param {Object} object - the object being added to the collection
 * @param {Object} targetCollection - the target collection or URL
 * @returns {Object}
 *
 * @example
 * // add bob to contacts
 * bob = new Person({name:'Bob'})
 * collection = new Collection({name: 'contacts'})
 * DeleteAction(bob, collection)
 *
 */
const deleteAction = (object: Object, targetCollection: Object) =>
  new Action({ type: 'DeleteAction', object, targetCollection });

export default deleteAction
