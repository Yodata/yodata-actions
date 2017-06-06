import Action from './action'

/**
 * RemoveAction - object is removed from targetCollection
 *
 * @param {string|Object} object - The thing being removed
 * @param {string|Object} targetCollection
 *
 * @returns {Action}
 *
 */
const RemoveAction = (object, targetCollection): Action =>
  new Action({ type: 'RemoveAction', object, targetCollection });

export default RemoveAction
