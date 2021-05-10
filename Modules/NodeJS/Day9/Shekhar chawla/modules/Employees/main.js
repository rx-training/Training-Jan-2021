const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads


const emps = require('./routes.js')
app.use('/emps', emps)

module.exports = app



