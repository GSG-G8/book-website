const { Pool } = require('pg');
require('env2')('./config.env');

let dbUrl;


if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.TEST_DB_URL;
} else if (process.env.NODE_ENV === 'production') {
  dbUrl = process.env.PRODUCTION_DB_URL;
} else if (process.env.NODE_ENV === 'development') {
  dbUrl = process.env.DB_URL;
}
console.log(dbUrl);

const options = {
  connectionString: dbUrl,
};

module.exports = new Pool(options);
