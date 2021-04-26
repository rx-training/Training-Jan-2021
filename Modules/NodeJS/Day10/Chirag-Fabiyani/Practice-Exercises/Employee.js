const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/EmpCollection';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

const EmpObject = require('./Emp');

router.post('/',express.json(),(req,res)=>{
    const instance = new EmpObject(req.body);
    instance.save((err)=>{
        if(err) console.log(err);
    });
    EmpObject.find().select().exec((err,result)=>{
        if(err) console.log(err);
        console.log(result);
    });
});

module.exports = router;