const express = require('express')
const route = express.Router()
const todoModel = require('./../models/todoModel.js')
const {getTodo, showTodo, createTodo, deleteTodo, updateTodo} = require('./../controllers/todoController.js')

route.get('/all', getTodo)
route.get('/get/:id', showTodo)
route.delete('/delete/:id', deleteTodo)
route.post('/post', createTodo)
route.put('/update', updateTodo)

module.exports = route