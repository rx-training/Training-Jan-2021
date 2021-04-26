const express = require('express')
const router = express.Router()


//JSON import
global.students =  require('../jsonFiles/students.json')
global.employees = require('../jsonFiles/employees.json')
global.assignments = require('../jsonFiles/assignments.json')

//contrler imports
const studentApi = require('./students/students')
const authenticationApi = require('./authentication/authentication')
const employeeApis = require('./employees/employees')

//authenticatore which verify the token before  response
const security = require('../authenticater/secutity')

//login first
router.use('/authenticate',authenticationApi)

//authenticatore(middleware)
router.use(security)

router.use('/students',studentApi);
router.use('/emps',employeeApis)

module.exports = router