'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapPropertiesToDataType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
/**
 * returns a typed object creator/validator
 *
 * @param {array<string>} properties
 * @param {[array<string>]} required
 * @param {object} context
 * @returns {object}
 * @example
 *
 * const properties = [ 'type', 'agent', 'object' ]
 * const required = [ 'type', 'object' ]
 * const context = {
 *    type: String                   // required
 *    object: Object
 *    agent: [ Array(Object) ]       //  [ bracketed values are optional ]
 *    participant: [ Array(Object) ] // optional array of Objects
 *  }
 *
 * createModel({properties, required, context}) => Model<Object>
 *
 */


var _objectmodel = require('objectmodel');

var _objectmodel2 = _interopRequireDefault(_objectmodel);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ContextMapper = _objectmodel2.default.Function(_objectmodel2.default.Array(String), _objectmodel2.default.Object, _objectmodel2.default.Array(String)).return(Object);

var mapPropertiesToDataType = exports.mapPropertiesToDataType = new ContextMapper(function (properties, context, required) {
  var reducer = function reducer(result, propertyID) {
    var property = context[propertyID];
    if (!property) {
      throw new Error('property ' + propertyID + ' not in context');
    }
    var range = property.range || property.rangeIncludes || 'Text';
    var type = (0, _lodash.castArray)(range).map(function (rangeInstance) {
      switch (rangeInstance) {
        case 'Boolean':
          return Boolean;
        case 'Date':
        case 'DateTime':
          return Date;
        case 'Number':
          return Number;
        case 'Text':
        case 'Time':
        case 'URL':
        case 'Literal':
          return String;
        default:
          return Object;
      }
    });
    var key = propertyID;
    var value = required.includes(key) ? type : type;
    return _extends({}, result, _defineProperty({}, key, value));
  };
  return properties.reduce(reducer, {});
});

var ModelFactory = _objectmodel2.default.Function({
  properties: _objectmodel2.default.Array(String),
  required: [_objectmodel2.default.Array(String)],
  context: Object
}).defaults({
  properties: ['type'],
  required: ['type']
}).assert(function hasAllProperties(props) {
  var notFound = [];
  var _props$properties = props.properties,
      properties = _props$properties === undefined ? [] : _props$properties,
      _props$context = props.context,
      context = _props$context === undefined ? {} : _props$context;

  properties.forEach(function (prop) {
    if (!context.hasOwnProperty(prop)) {
      notFound.push(prop);
    }
  });
  return notFound.length === 0;
}, 'Some properties were not found in context');

var createModel = new ModelFactory(function (_ref) {
  var properties = _ref.properties,
      context = _ref.context,
      required = _ref.required;

  var schema = mapPropertiesToDataType(properties, context, required);
  return (0, _objectmodel2.default)(schema);
});

exports.default = createModel;