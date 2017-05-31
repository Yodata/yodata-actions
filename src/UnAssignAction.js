// @flow

import Action from './action'

/**
 * Object is unassigned from recipient
 *
 * @param {Object} object - the Thing being assigned
 * @param {Object} recipient - The receiving Person or Organization
 * @returns {Action}
 *
 */
const UnAssignAction = (object: Object, recipient: Object): Action =>
  Action({ type: 'UnAssignAction', object, recipient });

export default UnAssignAction