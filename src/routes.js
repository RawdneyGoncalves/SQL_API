const { Route } = require('express');
const UserController = require('./controllers/UserController');
const express = require('express')
const Routes = express.Router()

Routes.post('/users', UserController.store);

module.exports = Routes; 