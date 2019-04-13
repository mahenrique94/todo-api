const Sequelize = require('sequelize')

const database = process.env.DB_DATABASE || 'todo'
const dialect = process.env.DB_DIALECT || 'mysql'
const host = process.env.DB_HOST || '127.0.0.1'
const password = process.env.DB_PASSWORD || 'root'
const port = process.env.DB_PORT || 3306
const user = process.env.DB_USER || 'root'

const sequelize = new Sequelize(`${dialect}://${user}:${password}@${host}:${port}/${database}`)

sequelize
    .authenticate()
    .then(() => console.log('Sequelize connected in MySQL with success'))
    .catch((error) => {
        console.log("An error was raised on trying to connect in MySQL:")
        console.log(error)
    })

module.exports = { sequelize }
