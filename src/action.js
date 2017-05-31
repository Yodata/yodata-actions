// @flow

import stamp from 'stampit'
import TypedObject from './TypedObject'
import flow from 'lodash/flow'

const assignTo = key =>
  function (value) {
    return Action({ ...this, [key]: value });
  };

const mapStringValueToProp = key =>
  function (value) {
    if (typeof value === 'string') {
      return { [key]: value };
    }
    return value;
  };

const mapAssign = (mapKey, assignKey) => flow(mapStringValueToProp(mapKey), assignTo(assignKey))

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
    });
  },
  flow: mapAssign('id', 'flow'),
};

const Action = stamp(TypedObject, {
  properties: {
    type: 'Action',
  },
  methods: actionMethods,
});

export default Action;