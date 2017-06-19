import TypedObject from '../src/TypedObject.js'
import Action from '../src/action.js'

test(`readme example`, () => {
  let Person = new TypedObject('Person')
  let Book = TypedObject('Book')

  let bob = TypedObject('Person', 'Bob')
  let alice = TypedObject('Person', 'Alice')
  let book = TypedObject('Book', 'The Little Prince')

  // Bob gives the book to Alice
  let action = Action('GiveAction').the(book).from(bob).to(alice)

  expect(action).toMatchObject({
    context: 'http://schema.org/',
    type: 'GiveAction',
    object: { context: 'http://schema.org/', type: 'Book' },
    sender: { context: 'http://schema.org/', type: 'Person' },
    recipient: { context: 'http://schema.org/', type: 'Person' },
  })
});

