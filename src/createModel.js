// @flow
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
import Model from 'objectmodel';
import { castArray } from 'lodash';

const ContextMapper = Model.Function(
  Model.Array(String),
  Model.Object,
  Model.Array(String)
).return(Object);

export const mapPropertiesToDataType = new ContextMapper(function(
  properties,
  context,
  required
) {
  const reducer = (result, propertyID) => {
    let property = context[propertyID];
    if (!property) {
      throw new Error(`property ${propertyID} not in context`);
    }
    let range = property.range || property.rangeIncludes || 'Text';
    let type = castArray(range).map(rangeInstance => {
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
    let key = propertyID;
    let value = required.includes(key) ? type : type;
    return { ...result, [key]: value };
  };
  return properties.reduce(reducer, {});
});

const ModelFactory = Model.Function({
  properties: Model.Array(String),
  required: [Model.Array(String)],
  context: Object
})
  .defaults({
    properties: ['type'],
    required: ['type']
  })
  .assert(function hasAllProperties(props) {
    const notFound = [];
    const { properties = [], context = {} } = props;
    properties.forEach(prop => {
      if (!context.hasOwnProperty(prop)) {
        notFound.push(prop);
      }
    });
    return notFound.length === 0;
  }, 'Some properties were not found in context');

const createModel = new ModelFactory(function({
  properties,
  context,
  required
}) {
  let schema = mapPropertiesToDataType(properties, context, required);
  return Model(schema);
});

export default createModel;
