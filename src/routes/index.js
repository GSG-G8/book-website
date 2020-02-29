const routes = require('express').Router();

const book = require('./book');
const error = require('../controllers/error');

routes.use(book);
routes.use(error.client);
routes.use(error.server);

module.exports = routes;
