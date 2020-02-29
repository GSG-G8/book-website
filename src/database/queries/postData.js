const dbConnection = require('../config/db_connection');

const insertPublisher = (reqData) => dbConnection.query({
  text: 'INSERT INTO publishers(name) VALUES ($1) RETURNING id;',
  values: [reqData.publisher],
});

const insertBook = (reqData, id) => dbConnection.query({
  text: 'INSERT INTO books (title, publisher_id, category, reserved, thumbnail) VALUES ($1, $2, $3, $4, $5) RETURNING id;',
  values: [reqData.title, id, reqData.category, false, reqData.cover],
});

const insertAuthor = (reqData, bookId) => dbConnection.query({
  text: 'INSERT INTO authors (name, book_id) VALUES ($1, $2);',
  values: [reqData.author, bookId],
});

module.exports = {
  insertPublisher, insertBook, insertAuthor,
};
