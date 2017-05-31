import Action from '../action';
import tn from '../typed';

const beatles = tn('MusicGroup', 'Beatles');
const john = tn('Person', 'john');
const paul = tn('Person', 'paul');
const george = tn('Person', 'george');
const ringo = tn('Person', 'ringo');
const contacts = tn('Collection', 'contacts');
const app = tn('SoftwareApplication', 'myApp');

describe('Creating Actions', () => {
  test('Action() => {type: Action}', () => {
    expect(Action()).toMatchObject({
      type: 'Action'
    });
  });

  test(`Action(type) => {type}<Action>`, () => {
    let action = Action('AddAction');
    expect(Action('AddAction')).toMatchObject({ type: 'AddAction' });
  });

  test('Action({type}) => {type}', () => {
    let data = { type: 'TestAction', name: 'TestAction' };
    expect(Action(data)).toMatchObject(data);
  });

  test('creating actions', () => {
    let action = Action({ type: 'AddAction', object: john });
    expect(action).toMatchObject({
      type: 'AddAction',
      object: john
    });
  });
});

describe('Action chaining API', () => {
  test('action.ofType() => action.type', () => {
    expect(new Action().ofType('BuyAction')).toMatchObject({
      type: 'BuyAction'
    });
  });
  test('action.by(person)', () => {
    expect(new Action().by(john)).toMatchObject({ agent: john });
  });
  test('Action.toCollection(targetCollection)', () => {
    expect(Action('AddAction').the(paul).toCollection(contacts)).toMatchObject({
      type: 'AddAction',
      object: paul,
      targetCollection: contacts
    });
  });
  test('Action.using(instrument)', () => {
    expect(Action('AddAction').the(paul).using(app)).toMatchObject({
      type: 'AddAction',
      object: paul,
      instrument: app
    });
  });
  test('Action.with([participant])', () => {
    expect(
      Action().with([john, paul, george, ringo])
    ).toHaveProperty('participant', [john, paul, george, ringo]);
  });
});

describe('Action immutability', () => {
  test('chain methods return new (immutable) Action', () => {
    let a = new Action({ type: 'Action' }).with(paul);
    let b = a.ofType('CreateAction');

    expect(a).toMatchObject({
      type: 'Action',
      participant: paul
    });

    expect(b).toMatchObject({
      type: 'CreateAction',
      participant: paul
    });
  });
});

describe('Action Serialization/Deserialization', () => {
  let a = Action({ type: 'CreateAction' })
    .who(paul)
    .the(beatles)
    .with([john, george, ringo])
    .complete();

  let serialized = JSON.stringify(a);
  let b = JSON.parse(serialized);

  test('Actions serialize to JSON objects', () => {
    expect(serialized).toBeDefined();
  });
  test('Deserialized action matches original action', () => {
    expect(b).toMatchObject(a);
  });
});

describe('Action helpers', () => {
  test(`action.start() = set startTime and ActiveActionStatus`, () => {
    let action = new Action().start();
    expect(action).toHaveProperty('actionStatus', 'ActiveActionStatus');
    expect(action.startTime).toBeDefined();
  });

  test(`action.complete() = set endTime and CompletedActionStatus`, () => {
    let action = new Action().complete();
    expect(action).toMatchObject({
      actionStatus: 'CompletedActionStatus'
    });
    expect(action.endTime).toBeDefined();
  });
});
