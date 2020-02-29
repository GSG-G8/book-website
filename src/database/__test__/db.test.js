const connection = require('../config/db_connection');
const { dbBuild } = require('../config/db_build');
const { getData } = require('../queries/getData');

beforeAll(() => dbBuild());
afterAll(() => connection.end());

test('test getData query', () => {
  return getData().then((data) => {
    const actual = data.rows[0];
    const expected = {
      id: 1, title: 'The Hobbit', publisher_name: 'Houghton Mifflin Harcourt', category: 'Fantasy', authors_name: 'J.R.R. Tolkien', reserved: false, thumbnail: 'https://cdn.pastemagazine.com/www/system/images/photo_albums/hobbit-book-covers/large/photo_14601_0-5.jpg?1384968217',
    };
    expect(actual).toEqual(expected);
  });
});
