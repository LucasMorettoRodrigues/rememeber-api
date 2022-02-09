const express = require('express')
const router = express.Router()
const {
        createTask,
        getProjectTasks,
        updateTask,
        deleteTask
    } = require('../controllers/tasks')

router.route('/tasks').post(createTask).get(getProjectTasks).delete(deleteTask).patch(updateTask)

module.exports = router

