const express = require('express');
const graphql = require('./graphql');

const app = express();
app.use('/graphql', graphql);

module.exports = app;