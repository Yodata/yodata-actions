// @flow

const typeFactory = (type: string = 'Thing') => (props: any): TypedObject => ({
  type,
  ...props
});

export default typeFactory
