const asnycHandler = require('express-async-handler')

// @desc set task
// @route POST /task/settask
// @access public
const setTask = asnycHandler(async (request, response) => {
    if (!request.body.text) {
        response.status(400)
        throw new Error('Please add text field')
    }


    response.status(200).json({ message: "Set Task" })
})

// @desc edit task
// route GET /task/edit/:id
// @access public
const editTask = asyncHandler(async (request, response) => {
    response.status(200).json({ message: `Edit task ${request.params.id}` })
})

// @desc mark task complete
// @route PUT /task/complete/:id
// @access public
const completeTask = asyncHandler(async (request, response) => {
    response.status(200).json({ message: `Test Task Completion id# ${request.params.id}` })
})

// @desc delete task
// @route DELETE /task/deletetask/:id
// @access public
const deleteTask = asyncHandler(async (request, response) => {
    response.status(200).json({ message: `Testing Delete Task id# ${request.params.id}` })
})


module.exports = {
    setTask,
    editTask,
    completeTask,
    deleteTask,
}