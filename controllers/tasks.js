const Task = require('../models/Task')

const createTask = async (req, res) => {
    req.body.project = req.params.id
    const task = await Task.create( req.body )
    res.status(201).json({ task })
}

const getProjectTasks = async (req, res) => {
    const tasks = await Task.find({ project: req.params.id })
    res.status(201).json({ tasks })
}

const getAllTasks = async (req, res) => {
    const tasks = await Task.find()
    res.status(201).json({ tasks })
}

const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate({ _id: req.params.taskId },
        { completed: req.body.completed },
        { new: true, runValidators: true } )

    if(!task) {
        throw new Error('Task does not exist')
    }

    res.status(200).json({ task })
}

const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete( { _id: req.params.taskId} )

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