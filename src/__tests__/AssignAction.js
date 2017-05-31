import assignAction from '../AssignAction'
import typed from '../typed';

test('assignAction(object, recipient)', () => {
  let bob = typed('Person', 'Bob');
  let alice = typed('Person', 'Alice')
  expect(assignAction(bob, alice)).toMatchObject({
    type: 'AssignAction',
    object: bob,
    recipient: alice,
  })
})


