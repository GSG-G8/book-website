const express = require('express');
const { join } = require('path');
const route = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable('x-powered-by');
app.set('port', process.env.PORT || 4000);
app.use(express.static(join(__dirname, '..', 'public')));

app.use(route);

module.exports = app;
