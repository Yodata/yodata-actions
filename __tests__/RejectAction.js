import RejectAction from '../src/RejectAction'
import typed from '../src/typed'

test('RejectAction', () => {
  let sender = typed('Person', 'Alice');
  let object = typed('Book', 'Gone with the wind.');
  expect(RejectAction(object, sender)).toMatchObject({
    type: 'RejectAction',
    object,
    sender,
  });
});
