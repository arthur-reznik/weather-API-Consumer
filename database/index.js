const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const City = require('../models/city');

const connection = new Sequelize(dbConfig);
console.log("Conectado ao banco");

City.init(connection);

module.exports = connection;