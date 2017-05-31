import TypedObject from '../TypedObject'

test('TypedObject(name) => {type: name}', () => {
  let it = new TypedObject({ type: 'Person', name: 'John' })
  expect(it).toMatchObject({
    type: 'Person',
    name: 'John',
  })
})

test('TypedObject(object) => {...object}', () => {
  let it = new TypedObject({ type: 'Thing', name: 'it' })
  expect(it).toMatchObject({
    type: 'Thing',
    name: 'it',
  })
})

test('new TypedObject => {type: Thing}', () => {
  let it = new TypedObject
  expect(it).toMatchObject({
    type: 'Thing',
  })
})

test('typed.toString() => JSON.stringify(typed)',()=> {
  let it = new TypedObject();
  expect(it.toString()).toEqual(JSON.stringify(it, null, 2))
})

test('typed.toJSON() => {...typed}', () => {
  let it = new TypedObject
  let json = it.toJSON()
  expect(json).toMatchObject({type:'Thing'})
  expect(json.__proto__).toEqual({})
})

