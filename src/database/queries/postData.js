const dbConnection = require('../config/db_connection');

const postData = (reqData) => {
  const { title, cover, category, author, publisher } = reqData;
  const sql = {
    text: 'INSERT INTO books (title, category, reserved, thumbnail) VALUES ($1, $2, $3, $4);',
    values: [title, category, false, cover],
    text2: 'INSERT INTO authors (name) VALUES ($1);',
    values2: [author],
    text3: 'INSERT INTO publishers (name) VALUES ($1);',
    values3: [publisher],
  };
  return dbConnection.query(sql);
};

module.exports = { postData };
