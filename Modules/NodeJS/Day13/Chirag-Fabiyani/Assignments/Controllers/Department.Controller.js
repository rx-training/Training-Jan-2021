const express = require('express');
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Departments = require('../Models/Department.Model')

const mongoDB = 'mongodb://127.0.0.1/Hospital';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

class Department{
    static addDepartment(req,res,next){
        const departments = new Departments(req.body);
        departments.save().then(()=>{
            res.send("Done")
        });
    }
}

router.post('/insert',express.json(),Department.addDepartment);

module.exports = router;