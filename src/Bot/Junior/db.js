const Sequelize = require('sequelize');
const DataTypes = require('sequelize')
const sequelize = new Sequelize('api_midall', 'root', 'root', {
    dialect: "mysql",
    host: "localhost",
    port: '3306',
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    DataTypes: DataTypes
}


