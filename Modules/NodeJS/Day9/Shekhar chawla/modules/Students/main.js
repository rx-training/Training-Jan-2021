const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

const students = require('./routes.js')
app.use('/students', students)

module.exports = app