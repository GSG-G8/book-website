const { getData } = require('../database/queries/getData');

exports.getBook = (req, res, next) => {
  getData().then(({ rows }) => {
    res.send(rows);
  }).catch((err) => next(err));
};
