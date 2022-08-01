const express = require('express') // common js syntax
const router = express.Router()
const { setTask, editTask, completeTask, deleteTask } = require('../controllers/taskController')


router.post('/settask', setTask)

router.get('/edit/:id', editTask)

router.put('/complete/:id', completeTask)

router.delete('/deletetask/:id', deleteTask)


module.exports = router