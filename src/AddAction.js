// @flow
import Action from './action';

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
function AddAction(object: string|Object, targetCollection: string|Object): Action {
  return Action({ type: 'AddAction', object, targetCollection });
}

export default AddAction
