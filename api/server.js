const express = require('express');

const app = server();

app.use(express.json());

module.exports = app;