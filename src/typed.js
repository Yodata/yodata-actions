// @flow
import TypedObject from './TypedObject'

/**
 * returns a new TypedObject using type and name
 * @param {string} type
 * @param {string} name
 * @returns {TypedObject}
 */
const typed = (type: string, name: string) => TypedObject({ type, name })

export default typed
