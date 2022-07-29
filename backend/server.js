const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()
const mongoose = require('mongoose')

// route for root.
app.get('/', (request, response) => {
    response.status(200).json({ message: "Testing for task" })
})

// route for adding task
app.post('/addTask', (request, response) => {
    response.status(200).json({ message: "Testing add task route" })
})

// route for editing task.
app.get('/edit/:id', (request, response) => {
    response.status(200).json({ message: "Testing edit of task route" })
})

//route for completing task
app.put('/markComplete', (request, response) => {
    response.status(200).json({ message: "Testing complete task route" })
})

// route for deleting task
app.delete('/deleteTask', (request, response) => {
    response.status(200).json({ message: "Testing complete task route" })
})

app.listen(port, () => console.log(` Server is started on PORT ${port}`))


