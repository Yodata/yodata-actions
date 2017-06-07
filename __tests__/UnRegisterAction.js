import UnRegisterAction from '../src/UnRegisterAction'
import typed from '../src/typed';

test('UnRegisterAction', () => {
  let website = typed('Website', 'MyWebsite');
  let alice = typed('Person', 'Alice');
  expect(UnRegisterAction(alice, website)).toMatchObject({
    type: 'UnRegisterAction',
    agent: alice,
    object: website
  })
});
