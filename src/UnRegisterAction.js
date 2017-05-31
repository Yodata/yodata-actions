// @flow

import Action from './action';
/**
 * UnRegisterAction - the agent is no longer registered with the object (service).
 * @param {Person<Object>} agent
 * @param {Thing<Object>} object
 * @constructor ( agent, object)
 * @return {Action<Object>}
 */
export default function Unregister(agent: Object, object: Object): Action {
  return new Action({ type: 'UnRegisterAction', agent, object });
}
