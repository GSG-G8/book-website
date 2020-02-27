const { postData } = require('../database/queries/postData');

exports.addBook = (req, res) => {
  const bookInfo = req.body;
  postData(bookInfo)
    .then(() => res.redirect('/'))
    .catch((err) => console.log('err:', err));
};
