"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _stampit = require("stampit");

var _stampit2 = _interopRequireDefault(_stampit);

var _TypedObject = require("./TypedObject");

var _TypedObject2 = _interopRequireDefault(_TypedObject);

var _flow = require("lodash/flow");

var _flow2 = _interopRequireDefault(_flow);

var _concat = require("lodash/concat");

var _concat2 = _interopRequireDefault(_concat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var assignTo = function assignTo(key) {
  return function (value) {
    return Action(_extends({}, this, _defineProperty({}, key, value)));
  };
};

var mapStringValueToProp = function mapStringValueToProp(key) {
  return function (value) {
    if (typeof value === "string") {
      return _defineProperty({}, key, value);
    }
    return value;
  };
};

var mapAssign = function mapAssign(mapKey, assignKey) {
  return (0, _flow2.default)(mapStringValueToProp(mapKey), assignTo(assignKey));
};

var Action = (0, _stampit2.default)(_TypedObject2.default, {
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
    set: function set(key, value) {
      return Action(_extends({}, this, _defineProperty({}, key, value)));
    },
    /**
     * adds value to set at key
     * @param   {string} key
     * @param   {*}      value
     * @returns {Action} new action
     */
    add: function add(key, value) {
      var currentValue = this[key] || [];
      if (!currentValue.includes(value)) {
        var nextValue = (0, _concat2.default)(currentValue, value);
        return Action(_extends({}, this, _defineProperty({}, key, nextValue)));
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
    start: function start() {
      return new Action(_extends({}, this, {
        startTime: String(new Date()),
        actionStatus: "ActiveActionStatus"
      }));
    },
    complete: function complete() {
      return new Action(_extends({}, this, {
        actionStatus: "CompletedActionStatus"
      }));
    },
    failed: function failed(error) {
      return new Action(_extends({}, this, {
        error: error,
        actionStatus: "FailedActionStatus"
      }));
    }
  }
});

exports.default = Action;