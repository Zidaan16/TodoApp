const todoModel = require('./../models/todoModel.js')
const mongoose = require('mongoose')

// Get
const getTodo = async (req, res) => {
    const model = await todoModel.find({})
    res.statusCode = 200
    res.json({model})
}

// Show
const showTodo = async (req, res) => {
    const {id} = req.params
    if (!id) {
        res.statusCode = 404
        return res.json({
            msg: 'Not Found',
            status: false
        })
    } else if (!mongoose.Types.ObjectId.isValid(id)) {
        res.statusCode = 404
        return res.json({
            msg: 'ID '+id+' Not Found',
            status: false
        })
    }
    const model = await todoModel.findById(id)
    res.statusCode = 200
    return res.json({
        status: true,
        data: model
    })
}

// Create
const createTodo = async (req, res) => {
    const {icon, title, desc, status} = req.body

    try {
        const model = await todoModel.create({icon, title, desc, status})
        res.statusCode = 200
        res.json(model)
    } catch (error) {
        res.statusCode = 403
        res.json({error: error.message})
    }
}

// Delete
const deleteTodo = async (req, res) => {
    const {id} = req.params
    if (!id) {
        res.statusCode = 404
        return res.json({
            msg: 'Not Found',
            status: false
        })
    } else if (!mongoose.Types.ObjectId.isValid(id)) {
        res.statusCode = 404
        return res.json({
            msg: 'Not Found',
            status: false
        })
    }
    const model = await todoModel.findByIdAndDelete(id)
    res.statusCode = 200
    return res.json({
        status: true,
        data: model
    })

}

// Update
const updateTodo = async (req, res) => {
    const {id, icon, title, desc, status} = req.body
    if (!id) {
        res.statusCode = 404
        return res.json({
            msg: 'Not Found',
            status: false
        })
    } else if (!mongoose.Types.ObjectId.isValid(id)) {
        res.statusCode = 404
        return res.json({
            msg: 'Not Found',
            status: false
        })
    }
    res.statusCode = 200
    const model = await todoModel.findByIdAndUpdate(id, {icon, title, desc, status})
    return res.json({
        status: true,
        data: 'Success updating data'
    })
}

module.exports = {createTodo, showTodo, getTodo, deleteTodo, updateTodo}