const express = require('express');
const router = express.Router();
const Employee = require('./Employee.Controller');

router.use('/emps',Employee);

module.exports = router;