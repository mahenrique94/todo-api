const restify = require('restify')

const { config } = require('./config/server')
const { routes: taskRoutes } = require('./task/routes')
const { routes: healthCheckRoutes } = require('./healthCheck/routes')

require('./config/database')

const server = restify.createServer()

config(server)
healthCheckRoutes(server)
taskRoutes(server)

server.listen(8080, 'localhost', () => {
    console.log('Server running at http://localhost:8080')
    console.log('Use CTRL+C to stop it')
})