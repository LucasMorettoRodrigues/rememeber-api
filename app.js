const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()
require('express-async-errors');
const cors = require('cors')

const authRouter = require('./routes/auth')
const projectsRouter = require('./routes/projects')
const tasksRouter = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const auth = require('./middleware/authentication')

app.use(express.json())

app.use(cors())
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/projects', auth, projectsRouter)
app.use('/api/v1/project/', auth, tasksRouter)
app.use(notFound)

const port = process.env.PORT || 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
