const healthCheck = (req, res, next) => {
    res.end()
    next()
}

module.exports = { healthCheck }
