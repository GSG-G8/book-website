const { Pool } = require('pg');
require('env2')('./config.env');

let dbUrl = '';


if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.TEST_DB_URL;
} else if (process.env.NODE_ENV === 'production') {
  dbUrl = process.env.PRODUCTION_DB_URL;
} else {
  dbUrl = process.env.DB_URL;
}

if (!dbUrl) throw new Error('No Database URL!!!');

const options = {
  connectionString: dbUrl,
  ssl: true,
};

module.exports = new Pool(options);
