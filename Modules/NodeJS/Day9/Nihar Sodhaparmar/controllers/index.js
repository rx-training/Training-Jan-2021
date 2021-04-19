const express = require('express');
const router = express.Router();

const authorization = require('./core/authorization');

const authenticationRouter = require('./core/authentication');
const employeeRouter = require('./employee/employee');
const studentRouter = require('./student/student');

//router.use(express.json());

router.use('/authentication', authenticationRouter);

router.use(authorization);
router.use('/employees', employeeRouter);
router.use('/students', studentRouter);

module.exports = router;