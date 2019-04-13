const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:root@127.0.0.1:3306/todo')

sequelize
    .authenticate()
    .then(() => console.log('Sequelize connected in MySQL with success'))
    .catch((error) => {
        console.log("An error was raised on trying to connect in MySQL:")
        console.log(error)
    })

module.exports = { sequelize }
