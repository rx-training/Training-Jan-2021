const express = require('express')
const app = express()

// middlewares
const logger = require('./middlewares/logger')
const generateToken = require('./modules/Auth/generateToken')       // authentication
const verifyToken = require('./modules/Auth/verifyToken')           // authorization

// routers
const employees = require('./routes/employees.routes')
const students = require('./routes/students.routes')



app.listen(3000, () => console.log('Listening at 3000...') )

app.use(express.json())
app.use(logger)
app.use('/', generateToken)

// modules
app.use('/employees', employees)         // emps -> assignments
app.use('/students', students)      // students -> fees , result





