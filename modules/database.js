require('dotenv').config()
const Sequelize = require('sequelize');
const sequelize = new Sequelize('server', 'root', process.env.SERVER_PASS, {
    host: "localhost",
    dialect: "mysql"
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}