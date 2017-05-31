// @flow

import Action from './action'

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
const AcceptAction = (object: string | Object, sender?: string | Object): Action =>
  new Action({ type: 'AcceptAction', object, sender });

export default AcceptAction
