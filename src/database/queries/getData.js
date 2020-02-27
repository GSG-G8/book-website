const dbConnection = require('../config/db_connection');

const getData = () => dbConnection.query('select id,title,(select publishers.name as publisher_name from publishers where publisher_id = id),category,(select name from authors inner join authors_books on authors_books.author_id = authors.id where authors_books.book_id = books.id),reserved,thumbnail from books;');

module.exports = getData;
