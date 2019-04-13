const { healthCheck } = require('./api')

const routes = server => {

    server.get('/api/health-check', healthCheck)

}

module.exports = { routes }
