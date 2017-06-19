import AcceptAction from '../src/AcceptAction'
import typed from '../src/typed';
import {Context} from 'yodata-context';

test('AcceptAction', () => {
  let sender = typed('Person', 'Alice');
  let object = typed('Book', 'Gone with the wind.');
  expect(AcceptAction(object, sender))
    .toMatchObject({ type: 'AcceptAction', object, sender })
});
