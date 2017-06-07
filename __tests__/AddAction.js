import AddAction from '../src/AddAction';

import tn from '../src/typed';
test(`addAction(object, targetCollection)`, () => {
  let type = 'AddAction';
  let object = tn('Person', 'John');
  let targetCollection = tn('Collection');
  expect(AddAction(object, targetCollection)).toMatchObject({
    type,
    object,
    targetCollection
  });
});
