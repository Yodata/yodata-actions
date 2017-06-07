import RegisterAction from '../src/RegisterAction'
import typed from '../src/typed'

test('RegisterAction', () => {
  let type = 'RegisterAction'
  let object = typed('Website', 'Website');
  let agent = typed('Person', 'Alice');
  let action = RegisterAction(object, agent)
  expect(action).toMatchObject({ type, agent, object });
});
