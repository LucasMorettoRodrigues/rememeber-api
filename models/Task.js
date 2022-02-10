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
    }
})

module.exports = mongoose.model('Task', TaskSchema)