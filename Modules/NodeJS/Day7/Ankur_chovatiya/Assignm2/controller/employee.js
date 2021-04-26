const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();
app.use(express.json());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const childRouter = require('./child/assignment');

//
router.get('/all',(req , res , next)=>{
    
    res.send('employees router is working fine!');
    next();
});


router.get('/:id',(req , res , next)=>{
    
    res.send('employee router is working fine!');
    next();
});


// child router

router.use('/:id/child/assignment',childRouter);

module.exports = router ;