const { del, edit, getAll, save, update } = require('./api')

const routes = server => {

    server.get('/api/tasks', getAll)
    server.get('/api/tasks/:id', edit)
    server.del('/api/tasks/:id', del)
    server.post('/api/tasks', save)
    server.put('/api/tasks', update)

}

module.exports = { routes }
