'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stampit = require('stampit');

var _stampit2 = _interopRequireDefault(_stampit);

var _defaults = require('lodash/defaults');

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DefaultProps = (0, _stampit2.default)({
  props: {
    defaultProps: {}
  },
  propertyDescriptors: {
    defaultProps: {
      enumerable: false
    }
  },
  init: function init(props, _ref) {
    var instance = _ref.instance,
        stamp = _ref.stamp;

    Object.assign(instance, (0, _defaults2.default)(props, this.defaultProps));
  }
});

exports.default = DefaultProps;