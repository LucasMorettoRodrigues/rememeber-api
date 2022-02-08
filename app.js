const express = require('express')
const app = express()

const authRouter = require('./routes/auth')
const projectsRouter = require('./routes/projects')

app.use(express.json())

app.use('api/v1/auth', authRouter)
app.use('api/v1/projects', projectsRouter)

const port = 5000

app.listen(port, console.log(`Server is listening on port ${port}`))