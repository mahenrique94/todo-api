const Task = require('./Task')

const del = (req, res, next) => {
    Task.destroy({ where: { id: req.params.id }})
        .then(() => {
            res.end()
            next()
        })
}

const edit = (req, res, next) => {
    Task.findById(req.params.id)
        .then(task => {
            res.send(task)
            next()
        })
}

const getAll = (_, res, next) => {
    Task.findAll()
        .then(tasks => {
            res.send(tasks)
            next()
        })
}

const save = (req, res, next) => {
    const { body } = req
    Task.create(body)
        .then(task => {
            res.send(task)
            next()
        }).catch(error => res.send(500, { error }))
}

const update = (req, res, next) => {
    const { body } = req
    Task.update(body, { where: { id: body.id }})
        .then(task => {
            res.send(task)
            next()
        }).catch(error => res.send(500, { error }))
}

module.exports = { del, edit, getAll, save, update }
