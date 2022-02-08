const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()
require('express-async-errors');

const authRouter = require('./routes/auth')
const projectsRouter = require('./routes/projects')
const notFound = require('./middleware/not-found')
const auth = require('./middleware/authentication')

app.use(express.json())

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/projects', auth, projectsRouter)
app.use(notFound)

const port = 5000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
