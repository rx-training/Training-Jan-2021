const express = require('express');
const router = express.Router()

const customerApi = require('./customers/customers')
const studentApi = require('./students/students')


router.use('/customers',customerApi);
router.use('/students',studentApi);

module.exports = router