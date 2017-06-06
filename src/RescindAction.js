import Action from './action'

/**
 * Object (offer) is rescinded
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
function RescindAction(object, recipient) {
  return Action({ type: 'RescindAction', object, recipient });
}

export default RescindAction;
