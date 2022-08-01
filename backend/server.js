const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')
const task = require('./routes/taskRoutes')
connectDB()

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//route for adding task
//route for editing task.
//route for completing task
//route for deleting task
app.use('/task', task)


// route for root.
app.get('/', (request, response) => {
    response.status(200).json({ message: "Grab Tasks" })
})



app.use(errorHandler)

app.listen(port, () => console.log(` Server is started on PORT ${port}`))


