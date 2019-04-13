const corsMiddleware = require('restify-cors-middleware')
const restify = require('restify')

const config = server => {

    const cors = corsMiddleware({
        origins: [ '*' ],
        allowHeaders: [ '*' ],
        exposeHeaders: [ '*' ]
    })

    server.pre(cors.preflight)

    server.use(cors.actual)
    server.use(restify.plugins.bodyParser())

    server.opts('*', (req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Methods', req.header('Access-Control-Request-Method'))
        res.header('Access-Control-Allow-Headers', req.header('Access-Control-Request-Headers'))
        res.send(200)
        return next()
    })

}

module.exports = { config }
