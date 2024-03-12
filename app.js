const express = require('express')
const mongoose = require('mongoose')
const dotEnv = require('dotenv').config()
const env = process.env
const app = express()
const api = require('./routes/api.js')

// set root folder
app.use((req, res, next) => {
    console.info(`${req.method} ${res.statusCode} ${req.url}`)
    next()
})

app.use(express.json())

// api
app.use('/api', api)

// 404
app.get('/api/*', (req, res) => {
    res.json({
        'msg': 'Not Found',
        'status': false
    })
    res.status(404)
})

// connect db
mongoose.connect(`mongodb://${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`).then(() => {
    app.listen(env.SERVER_PORT, () => {
        console.clear()
        console.info(`Server: http://${env.SERVER_HOST}:${env.SERVER_PORT} \n`)
    })
}).catch((error) => {
    console.info(error)
})