const express = require('express')
const app = express()

// middlewares
const logger = require('./middlewares/logger')
const generateToken = require('./modules/Auth/generateToken')       // authentication
const verifyToken = require('./modules/Auth/verifyToken')           // authorization

// routers
const employees = require('./modules/Employees/main')
const students = require('./modules/Students/main')



app.listen(3000, () => console.log('Listening at 3000...') )

app.use(logger)
app.use('/', generateToken)





app.use(employees)
app.use(students)









