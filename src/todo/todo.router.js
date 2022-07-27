const router = require('express').Router()
const httpTodo = require('./todo.http')

router.route('/tasks')
    .get(httpTodo.getAll)
    .post(httpTodo.create)

router.route('/tasks/:id')
    .get(httpTodo.getById)
    .delete(httpTodo.deleteById)
    .put(httpTodo.updateById)


module.exports = {
    router
}