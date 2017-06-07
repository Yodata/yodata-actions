import DefaultProps from '../src/DefaultProps'

test(`can set defaultProps`, () => {
  let defaultProps = { a: 'a' }
  let TypeA = DefaultProps.props({ defaultProps })
  expect(TypeA()).toMatchObject(defaultProps)
})

test(`default props are overridden from local props`, () => {
  let defaultProps = { a: 'a', b: 'a' }
  let TypeA = DefaultProps.props({ defaultProps })
  let a = TypeA();
  let b = TypeA({ b: 'b' })
  let c = TypeA({ a: 'c' })
  expect(a).toMatchObject({ a: 'a', b: 'a' })
  expect(b).toMatchObject({ a: 'a', b: 'b' })
  expect(c).toMatchObject({ a: 'c', b: 'a' })
})

