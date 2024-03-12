const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoModel = new Schema({
    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('todoModel', todoModel)