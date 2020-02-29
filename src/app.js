const { join } = require('path');
const express = require('express');
const compression = require('compression');

const route = require('./routes');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');
app.set('port', process.env.PORT || 4000);
app.use(compression());
app.use(express.static(join(__dirname, '..', 'public')));

app.use(route);

module.exports = app;
