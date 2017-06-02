'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _stampit = require('stampit');

var _stampit2 = _interopRequireDefault(_stampit);

var _TypedObject = require('./TypedObject');

var _TypedObject2 = _interopRequireDefault(_TypedObject);

var _flow = require('lodash/flow');

var _flow2 = _interopRequireDefault(_flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var assignTo = function assignTo(key) {
  return function (value) {
    return Action(_extends({}, this, _defineProperty({}, key, value)));
  };
};

var mapStringValueToProp = function mapStringValueToProp(key) {
  return function (value) {
    if (typeof value === 'string') {
      return _defineProperty({}, key, value);
    }
    return value;
  };
};

var mapAssign = function mapAssign(mapKey, assignKey) {
  return (0, _flow2.default)(mapStringValueToProp(mapKey), assignTo(assignKey));
};

var actionMethods = {
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
  start: function start() {
    return new Action(_extends({}, this, {
      startTime: String(new Date()),
      actionStatus: 'ActiveActionStatus'
    }));
  },
  complete: function complete() {
    return new Action(_extends({}, this, {
      endTime: String(new Date()),
      actionStatus: 'CompletedActionStatus'
    }));
  },
  failed: function failed(error) {
    return new Action(_extends({}, this, {
      error: error,
      endTime: String(new Date()),
      actionStatus: 'FailedActionStatus'
    }));
  },
  flow: mapAssign('id', 'flow')
};

var Action = (0, _stampit2.default)(_TypedObject2.default, {
  properties: {
    type: 'Action'
  },
  methods: actionMethods
});

exports.default = Action;