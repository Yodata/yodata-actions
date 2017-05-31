import RegisterAction from '../RegisterAction'
import typed from '../typed'

test('RegisterAction', () => {
  let type = 'RegisterAction'
  let object = typed('Website', 'Website');
  let agent = typed('Person', 'Alice');
  let action = RegisterAction(object, agent)
  expect(action).toMatchObject({ type, agent, object });
});
