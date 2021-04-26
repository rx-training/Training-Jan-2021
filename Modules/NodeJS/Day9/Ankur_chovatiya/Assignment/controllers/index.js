const express = require('express');

const router = express.Router();
const authRouter = require('./Authentication/Authentication');
const empRouter = require('./Employee/employee');
const stuRouter = require('./Student/student');


router.get('/', (req, res,next)=>{
    res.send('rouer is working fine!');
    next();
});


router.use('/authentication' , authRouter);
router.use('/employee' , empRouter);
router.use('/student' , stuRouter);

module.exports = router;