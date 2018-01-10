// @flow

import stamp from "stampit";
import TypedObject from "./TypedObject";
import flow from "lodash/flow";
import concat from "lodash/concat";

const assignTo = key =>
  function(value) {
    return Action({ ...this, [key]: value });
  };

const mapStringValueToProp = key =>
  function(value) {
    if (typeof value === "string") {
      return { [key]: value };
    }
    return value;
  };

const mapAssign = (mapKey, assignKey) =>
  flow(mapStringValueToProp(mapKey), assignTo(assignKey));

const Action = stamp(TypedObject, {
  properties: {
    type: "Action"
  },
  methods: {
    /**
     * sets the value of key
     * @param   {string} key
     * @param   {*} value
     * @returns {Action} always returns a new action
     */
    set: function(key: string, value: any) {
      return Action({ ...this, [key]: value });
    },
    /**
     * adds value to set at key
     * @param   {string} key
     * @param   {*}      value
     * @returns {Action} new action
     */
    add: function(key: string, value: any) {
      let currentValue = this[key] || [];
      if (!currentValue.includes(value)) {
        let nextValue = concat(currentValue, value);
        return Action({ ...this, [key]: nextValue });
      }
      return this;
    },
    agent: assignTo("agent"),
    ofType: assignTo("type"),
    by: assignTo("agent"),
    who: assignTo("agent"),
    did: assignTo("type"),
    the: assignTo("object"),
    and: assignTo("participant"),
    using: assignTo("instrument"),
    with: assignTo("instrument"),
    toCollection: assignTo("targetCollection"),
    from: assignTo("sender"),
    to: assignTo("recipient"),
    for: assignTo("recipient"),
    withError: assignTo("error"),
    flow: mapAssign("id", "flow"),
    start: function() {
      return new Action({
        ...this,
        startTime: String(new Date()),
        actionStatus: "ActiveActionStatus"
      });
    },
    complete: function() {
      return new Action({
        ...this,
        actionStatus: "CompletedActionStatus"
      });
    },
    failed: function(error) {
      return new Action({
        ...this,
        error,
        actionStatus: "FailedActionStatus"
      });
    }
  }
});

export default Action;
