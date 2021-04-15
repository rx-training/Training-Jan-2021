const express = require('express')
const router = express.Router({ mergeParams: true })


const employeeApis = require('./employees/employees')

router.use('/emps',employeeApis)

module.exports = router