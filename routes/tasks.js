const express = require('express')
const router = express.Router()
const {
        createTask,
        getProjectTasks,
        getAllTasks,
        updateTask,
        deleteTask
    } = require('../controllers/tasks')

router.route('/tasks')
    .get(getAllTasks)

router.route('/:id/tasks')
    .post(createTask)
    .get(getProjectTasks)

router.route('/:id/tasks/:taskId')
    .delete(deleteTask)
    .patch(updateTask)

module.exports = router

