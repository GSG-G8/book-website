const routes = require('express').Router();

const { addBook } = require('../controllers/addBook');
const { getBook } = require('../controllers/getBook')

routes.post('/addbook', addBook);
routes.get('/getBook', getBook);

module.exports = routes;