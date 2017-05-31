import AcceptAction from '../AcceptAction'
import typed from '../typed';

test('AcceptAction', () => {
  let sender = typed('Person', 'Alice');
  let object = typed('Book', 'Gone with the wind.');
  expect(AcceptAction(object, sender))
    .toMatchObject({ type: 'AcceptAction', object, sender })
});
