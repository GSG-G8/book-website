const { insertPublisher } = require('../database/queries/postData');
const { insertBook } = require('../database/queries/postData');
const { insertAuthor } = require('../database/queries/postData');

exports.addBook = (req, res, next) => {
  const bookInfo = req.body;
  insertPublisher(bookInfo).then((result) => result.rows[0].id)
    .then((publisherId) => insertBook(bookInfo, publisherId))
    .then((result) => insertAuthor(bookInfo, result.rows[0].id))
    .then(() => res.redirect('/'))
    .catch((err) => next(err));
};
