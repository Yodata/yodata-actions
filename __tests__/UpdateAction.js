import UpdateAction from '../src/UpdateAction'
import typed from '../src/typed';

test('UpdateAction', () => {
  let result = typed('Person', 'Alice');
  let collection = typed('ItemList', 'contacts');
  let action = UpdateAction(result, collection)
  expect(action).toMatchObject({
    type: 'UpdateAction',
    result: result,
    targetCollection: collection,
  });
});
