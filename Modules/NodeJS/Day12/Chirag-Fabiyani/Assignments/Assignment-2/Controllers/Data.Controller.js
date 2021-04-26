const express = require('express');
const router = express.Router({mergeParams: true});
const Security = require('./Security');
const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/Employees';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

class Assignments{
    static all(req,res,next){
        const EmpData = require('../Models/Employee.Model');
        EmpData.find({Id: parseInt(req.params.id)},{'Assignments.$': 1}).select().exec((err,result)=>{
            res.send(result);
        })
    }

    static AID(req,res,next){
        const EmpData = require('../Models/Employee.Model');
        EmpData.findOne({Id: parseInt(req.params.id), "Assignments.AssignmentId" : parseInt(req.params.aid)},{'Assignments.$': 1}).select().exec((err,result)=>{
            res.send(result)
        });
    }

    static Delete(req,res,next){
        const EmpData = require('./EmpData');
        EmpData.updateOne({Id: parseInt(req.params.id), "Assignments.AssignmentId" : parseInt(req.params.aid)},{ $pull: {"Assignments":{"AssignmentId" : parseInt(req.params.aid)}}}).then(()=>{
                res.send(
                    "Employee ID "+req.params.id+" Having Assignment ID "+req.params.aid+ " is removed"
                );
        });
    }
}

router.get('/all',Security,Assignments.all);

router.get('/:aid',Security,Assignments.AID);

router.get('/:aid/delete',Security,Assignments.Delete);

module.exports = router;