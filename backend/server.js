const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const task = require('./routes/taskRoutes')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())
//route for adding task
//route for editing task.
//route for completing task
//route for deleting task
app.use('/task', task)


// route for root.
app.get('/', (request, response) => {
    response.status(200).json({ message: "Grab Tasks" })
})




app.listen(port, () => console.log(` Server is started on PORT ${port}`))


