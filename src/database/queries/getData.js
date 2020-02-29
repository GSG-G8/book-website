const dbConnection = require('../config/db_connection');

const getData = () => dbConnection.query('select id,title,(select publishers.name as publisher_name from publishers where publisher_id = id),category,(select authors.name as authors_name from authors  where authors.book_id = books.id),reserved,thumbnail from books');

module.exports = { getData };
