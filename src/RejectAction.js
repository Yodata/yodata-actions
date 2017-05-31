// @flow

import Action from './action'

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
const RejectAction = (object: string | Object, sender?: string | Object): Action =>
  new Action({ type: 'RejectAction', object, sender });

export default RejectAction
