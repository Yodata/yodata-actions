// @flow

import TypedObject from './TypedObject'
import Action from './action'

export const Thing = TypedObject.props({ type: 'Thing' })
export const Person = TypedObject.props({ type: 'Person' })
export const Organization = TypedObject.props({ type: 'Organization' })
export { Action }
export { default as AddAction } from './AddAction'
export { default as AcceptAction } from './AcceptAction'
export { default as AssignAction } from './AssignAction'
export { default as CreateAction } from './CreateAction'
export { default as RegisterAction } from './RegisterAction'
export { default as RejectAction } from './RejectAction'
export { default as UpdateAction } from './UpdateAction'

