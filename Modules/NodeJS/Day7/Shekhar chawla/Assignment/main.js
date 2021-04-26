const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.listen(3000, () => console.log('Listening on 3000...'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

// logger middle
const logger = require('./middlewares/logger.js')
app.use(logger)

// all routes
const emps = require('./routes/employees.js')
app.use('/emps', emps)





