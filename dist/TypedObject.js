"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _stampit = require("stampit");

var _stampit2 = _interopRequireDefault(_stampit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TypedObject = (0, _stampit2.default)({
  properties: {
    type: "Thing"
  },
  methods: {
    toString: function toString() {
      return JSON.stringify(this, null, 2);
    },
    toJSON: function toJSON() {
      return Object.assign({}, this);
    }
  },
  init: function init(props, _ref) {
    var instance = _ref.instance;

    switch (typeof props === "undefined" ? "undefined" : _typeof(props)) {
      case "string":
        instance.type = props;
        break;
      case "object":
        Object.assign(this, instance, props);
        break;
      default:
        break;
    }
  }
});

exports.default = TypedObject;