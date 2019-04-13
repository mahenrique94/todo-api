const Sequelize = require('sequelize')

const { sequelize } = require('../config/database')

const Task = sequelize.define('task', {
    id: {
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        type: Sequelize.UUID
    },
    title: {
        allowNull: false,
        type: Sequelize.STRING
    }
})

Task.sync()
    .then(() => console.log('Task table crated with success'))
    .catch(error => {
        console.log('An error was raised on Task table create')
        console.log(error)
    })

module.exports = Task
