const connection = require('../config/db_connection');
const { dbBuild  } = require('../config/db_build');
const { getData } = require('../queries/getData');
// const { postData } = require('../queries/postData');

beforeAll(()=>{
  return dbBuild();
});
afterAll(()=>{
  return connection.end();
});

test('jest is working', () => {
  expect(1).toBe(1);
});

test("test getData query", () => {
  return getData().then(data => {
    const actual = data.rows[0];
    const expected = {id: 1, title: 'The Hobbit', publisher_name: 'Houghton Mifflin Harcourt', category: 'Fantasy', name: 'J.R.R. Tolkien', reserved: false, thumbnail: 'http://books.google.com/books/content?id=OlCHcjX0RT4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'};
    expect(actual).toEqual(expected);
  });
});

