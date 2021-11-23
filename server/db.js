const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, //db name
    process.env.DB_USER, //db user
    process.env.DB_PASSWORD, //db password
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)