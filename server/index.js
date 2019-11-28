const express = require('express');
const routes = require('../routes');
const controllers = require('../controllers');

const server = express();
server.use(express.json());


server.use('/api', routes);
server.get('/', controllers.getSplash);

module.exports = server;

// server/tests/index.js