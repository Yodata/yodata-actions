import DeleteAction from '../src/DeleteAction';
import typed from '../src/typed';

test('DeleteAction', () => {
  let movie = typed('Movie', 'Batman vs. Superman');
  let collection = typed('ItemList', 'Movies I want to see.');
  expect(DeleteAction(movie, collection)).toMatchObject({
    type: 'DeleteAction',
    object: movie,
    targetCollection: collection
  });
});
