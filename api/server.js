const express = require('express');
const router = require('../projects/router');

const app = express();

app.use(express.json());
app.use('/api/projects', router);

module.exports = app;