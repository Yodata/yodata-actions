'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateAction = exports.RejectAction = exports.RegisterAction = exports.CreateAction = exports.AssignAction = exports.AcceptAction = exports.AddAction = exports.Action = exports.Organization = exports.Person = exports.Thing = undefined;

var _AddAction = require('./AddAction');

Object.defineProperty(exports, 'AddAction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AddAction).default;
  }
});

var _AcceptAction = require('./AcceptAction');

Object.defineProperty(exports, 'AcceptAction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AcceptAction).default;
  }
});

var _AssignAction = require('./AssignAction');

Object.defineProperty(exports, 'AssignAction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_AssignAction).default;
  }
});

var _CreateAction = require('./CreateAction');

Object.defineProperty(exports, 'CreateAction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CreateAction).default;
  }
});

var _RegisterAction = require('./RegisterAction');

Object.defineProperty(exports, 'RegisterAction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RegisterAction).default;
  }
});

var _RejectAction = require('./RejectAction');

Object.defineProperty(exports, 'RejectAction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RejectAction).default;
  }
});

var _UpdateAction = require('./UpdateAction');

Object.defineProperty(exports, 'UpdateAction', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_UpdateAction).default;
  }
});

var _TypedObject = require('./TypedObject');

var _TypedObject2 = _interopRequireDefault(_TypedObject);

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Thing = exports.Thing = _TypedObject2.default.props({ type: 'Thing' });
var Person = exports.Person = _TypedObject2.default.props({ type: 'Person' });
var Organization = exports.Organization = _TypedObject2.default.props({ type: 'Organization' });
exports.Action = _action2.default;