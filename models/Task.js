const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, "Please provide task"]
    },
    date: {
        type: Date,
        required: [true, "Please provide date"]
    },
    completed: {
        type: Boolean,
        default: false
    },
    project: {
        type: mongoose.Types.ObjectId,
        ref: 'Project',
        required: [true, 'Please provide project']
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide user']
    }
})

module.exports = mongoose.model('Task', TaskSchema)