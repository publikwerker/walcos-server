'use strict';
const express = require('express');
const routes = require('../routes');
const controllers = require('../controllers');
const morgan = require('morgan');
const chalk = require('chalk');

const server = express();

server.use(morgan('common'));
server.use(express.json());


server.use('/api', routes);
server.get('/', controllers.getSplash);

server.use('*', (req, res) => {
  return res.status(404).json({message: 'Not Found'});
});

module.exports = server;

// server/tests/index.js