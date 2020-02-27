const { postData } = require('../database/queries/postData');

exports.addBook = (req, res) => {
  postData(req.json()).then((data) => {
    console.log(data);
    res.redirect('/');
  });
}