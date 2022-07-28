const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()
const mongoose = require('mongoose')

// route for root.
app.get('/', (request, response) => {
    response.json({ message: "testing for task" })
})

app.listen(port, () => console.log(` Server is started on PORT ${port}`))


