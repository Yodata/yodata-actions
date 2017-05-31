// @flow

import stamp from 'stampit'
import TypedObject from './TypedObject'

const assignTo = key => function (value) {
  return Action({ ...this, [key]: value })
}

const actionMethods = {
  the: assignTo('object'),
  toCollection: assignTo('targetCollection'),
  ofType: assignTo('type'),
  did: assignTo('type'),
  with: assignTo('participant'),
  using: assignTo('instrument'),
  from: assignTo('sender'),
  by: assignTo('agent'),
  who: assignTo('agent'),
  withError: assignTo('error'),
  start: function () {
    return new Action({
      ...this,
      startTime: String(new Date()),
      actionStatus: 'ActiveActionStatus',
    });
  },
  complete: function () {
    return new Action({
      ...this,
      endTime: String(new Date()),
      actionStatus: 'CompletedActionStatus',
    });
  },
  failed: function (error) {
    return new Action({
      ...this,
      error,
      endTime: String(new Date()),
      actionStatus: 'FailedActionStatus',
    })
  },
}

const Action = stamp(TypedObject, {
  properties: {
    type: 'Action',
  },
  methods: actionMethods
})

export default Action

export function createAction(value: string | TypedObject): Action {
  return Action(value);
}


