const express = require('express') // common js syntax
const router = express.Router()
const { setTask, editTask, completeTask, deleteTask } = require('../controllers/taskController')


router
    .route('/settask')
    .post(setTask)

router
    .route('/edit/:id')
    .get(editTask)

router
    .route('/complete/:id')
    .put(completeTask)

router
    .route('/deletetask/:id')
    .delete(deleteTask)
module.exports = router