// @flow

import stamp from "stampit";

const TypedObject = stamp({
  properties: {
    type: "Thing"
  },
  methods: {
    toString() {
      return JSON.stringify(this, null, 2);
    },
    toJSON() {
      return Object.assign({}, this);
    }
  },
  init(props, { instance }) {
    switch (typeof props) {
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

export default TypedObject;
