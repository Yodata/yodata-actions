import TypedObject from '../src/TypedObject'

test('TypedObject(typeName: string) => {type: typeName}', () => {
  let it = new TypedObject('Person')
  expect(it).toMatchObject({
    type: 'Person'
  })
})

test('TypedObject(object) => {...object}', () => {
  let it = new TypedObject({ type: 'Thing', name: 'it', id: 1 })
  expect(it).toMatchObject({
    type: 'Thing',
    name: 'it',
    id: 1
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

