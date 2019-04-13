const restify = require('restify')

const { config } = require('./config/server')
const { routes: taskRoutes } = require('./task/routes')
const { routes: healthCheckRoutes } = require('./healthCheck/routes')

require('./config/database')

const server = restify.createServer()

config(server)
healthCheckRoutes(server)
taskRoutes(server)

const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`)
    console.log('Use CTRL+C to stop it')
})