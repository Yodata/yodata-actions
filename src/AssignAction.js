// @flow

import Action from './action'

/**
 * Object is assigned to to the recipient, by agent
 * @param {string|Object} object
 * @param {string|Object} recipient
 * @returns {Action}
 * @example
 * // bob is assigned to alice
 * let bob = tn('Person', 'Bob');
 * let alice = tn('Person', 'Alice')
 * let action = AssignAction(bob, alice)
 * // => {type: AssignAction, object: bob, recipient alice}
 */
function AssignAction(object: string | Object, recipient: string | Object): Action {
  return Action({ type: 'AssignAction', object, recipient });
}

export default AssignAction