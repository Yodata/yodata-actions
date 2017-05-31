import stamp from 'stampit'
import defaults from 'lodash/defaults'

const DefaultProps = stamp({
  props: {
    defaultProps: {},
  },
  propertyDescriptors: {
    defaultProps: {
      enumerable: false,
    },
  },
  init(props, { instance, stamp }) {
    Object.assign(instance, defaults(props, this.defaultProps))
  },
})

export default DefaultProps