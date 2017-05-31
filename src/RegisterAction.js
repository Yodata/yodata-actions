// @flow

import Action from './action';

/**
 * RegisterAction - The agent<Person> is registered for object<Thing>
 * @param {string|Object} object
 * @param {string|Object} agent
 * @returns {Action}
 *
 */
const RegisterAction = (object: string|Object, agent: string|Object) =>
  Action({ type: 'RegisterAction', object, agent });

export default RegisterAction;
