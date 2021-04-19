const express = require('express');
const router = express.Router({mergeParams: true});
const fs = require('fs');
const Security = require('./Security');
const mongoose = require('mongoose');
const { parse } = require('path');

const mongoDB = 'mongodb://127.0.0.1/Employees';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

class Assignments{
    static all(req,res,next){
        const EmpData = require('./EmpData');
        EmpData.find({Id: parseInt(req.params.id)},{'Assignments.$': 1}).select().exec((err,result)=>{
            res.send(result);
        })
    }

    static AID(req,res,next){
        const EmpData = require('./EmpData');
        EmpData.findOne({Id: parseInt(req.params.id), "Assignments.AssignmentId" : parseInt(req.params.aid)},{'Assignments.$': 1}).select().exec((err,result)=>{
            res.send(result)
        });
    }

}

router.get('/all',Security,Assignments.all);

router.get('/:aid',Security,Assignments.AID);


module.exports = router;