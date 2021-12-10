const Sequelize = require('sequelize');
const User = require('../models/User');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

module.exports = connection; 