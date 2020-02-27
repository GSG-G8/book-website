const { getData } = require('../database/queries/getData');

exports.getBook = (req, res) => {
  getData().then((data) => {
    res.send(data.rows);
  });
};
