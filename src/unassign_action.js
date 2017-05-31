// @flow

import Action from './action'

/**
 * Agent assigns the object to one or more recipients
 *
 * @param {Thing<Object>} object - the Thing being assigned
 * @param {Thing<Object>} recipient - The receiving Person or Organization
 *
 */
const UnAssignAction = (object: Object, recipient: Object): Action =>
  Action({ type: 'UnAssignAction', object, recipient });

export default UnAssignAction