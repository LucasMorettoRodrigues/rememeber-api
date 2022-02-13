const Task = require('../models/Task')

const createTask = async (req, res) => {
    req.body.project = req.params.id
    req.body.createdBy = req.user.userId
    const task = await Task.create( req.body )
    res.status(201).json({ task })
}

const getProjectTasks = async (req, res) => {

    const { project } = req.query

    const tasks = await Task.find({ 
        project: req.params.id,
        createdBy: req.user.userId
    })
    res.status(201).json({ tasks })
}

const getAllTasks = async (req, res) => {
    const { project } = req.query
    const objectQuery = { createdBy: req.user.userId }

    if(project) {
        objectQuery.project = project
    }

    const tasks = await Task.find(objectQuery)

    res.status(201).json({ tasks })
}

const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate({ 
        _id: req.params.taskId,
        createdBy: req.user.userId
    },
        { completed: req.body.completed },
        { new: true, runValidators: true } 
    )

    if(!task) {
        throw new Error('Task does not exist')
    }

    res.status(200).json({ task })
}

const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete({ 
        _id: req.params.taskId,
        createdBy: req.user.userId
    })

    if(!task) {
        throw new Error('Task does not exist')
    }

    res.status(200).send()
}

module.exports = {
    createTask,
    getProjectTasks,
    deleteTask,
    updateTask,
    getAllTasks
}