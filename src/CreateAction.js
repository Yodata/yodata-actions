// @flow

import Action from './action';

/**
 * Agent creates result - optionally with participant using instrument
 *
 * @param {Object} result - the Thing being created
 * @param {Object} agent - the Person that creates or produces the Object
 * @example
 * {
 *   @context: http://schema.org/
 *   @type: 'CreateAction'
 *   result {
 *      @type: Person
 *      name: Bob
 *   },
 */
function CreateAction(result: Object, agent: Object): Action {
  return Action({ type: 'CreateAction', result, agent });
}

export default CreateAction;
