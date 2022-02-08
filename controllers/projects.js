const Project = require('../models/Project')

const getAllProjects = async (req, res) => {
    const projects = await Project.find({ createdBy: req.user.userId })
    res.status(200).json({ projects })
}

const createProject = async (req, res) => {
    req.body.createdBy = req.user.userId
    const project = await Project.create( req.body )
    res.status(201).json({ project })
}

const getProject = async (req, res) => {
    const project = await Project.findOne({ 
            createdBy: req.user.userId,
            _id: req.params.id
        })

    if(!project) {
        throw new Error('Project not found')
    }

    res.status(200).json({ project })
}

const updateProject = async (req, res) => {
    const { name } = req.body

    if(name === '') {
        throw new Error('Name field is empity')
    }

    const project = await Project.findByIdAndUpdate(
        { _id: req.params.id, createdBy: req.user.userId, },
        req.body,
        { new: true, runValidators: true}
    )

    if(!project) {
        throw new Error('Project not found')
    }

    res.status(200).json({ project })
}

const deleteProject = async (req, res) => {
    const project = await Project.findByIdAndRemove({ 
        createdBy: req.user.userId,
        _id: req.params.id
    })

    if(!project) {
        throw new Error('Project not found')
    }

    res.status(200).send()
}

module.exports = {
    getAllProjects,
    createProject,
    getProject,
    updateProject,
    deleteProject,
}