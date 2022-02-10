const express = require('express')
const router = express.Router()
const {
        createTask,
        getProjectTasks,
        updateTask,
        deleteTask
    } = require('../controllers/tasks')

router.route('/:id/tasks')
    .post(createTask)
    .get(getProjectTasks)

router.route('/:id/tasks/:taskId')
    .delete(deleteTask)
    .patch(updateTask)

module.exports = router

