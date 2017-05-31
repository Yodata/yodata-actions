import RejectAction from '../RejectAction'
import typed from '../typed'

test('RejectAction', () => {
  let sender = typed('Person', 'Alice');
  let object = typed('Book', 'Gone with the wind.');
  expect(RejectAction(object, sender)).toMatchObject({
    type: 'RejectAction',
    object,
    sender,
  });
});
