const routes = require('express').Router();
const book  = require('./book');

routes.use(book);

module.exports = routes;