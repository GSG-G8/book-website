const routes = require('express').Router();

const { addBook } = require('../controllers/addBook');

routes.post('/addbook', addBook);

module.exports = routes;