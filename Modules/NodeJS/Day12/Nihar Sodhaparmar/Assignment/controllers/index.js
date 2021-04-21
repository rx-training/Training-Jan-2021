const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const database = 'mongodb://localhost/EmployeeDB';
mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MonoDB Connected...');
}).catch((err) => {
    console.error('Could not connect to MongoDB...', err)
});


const authorization = require('./core/authorization');

const authenticationRouter = require('./core/authentication');
const employeeRouter = require('./employee/employee');
const studentRouter = require('./student/student');


router.use('/authentication', authenticationRouter);

router.use(authorization);
router.use('/employees', employeeRouter);
router.use('/students', studentRouter);

module.exports = router;