const express = require('express');
const router = express.Router();
const Security = require('../Middlewares/Security.Middleware');
const LoginDomain = require('../Domains/Login.Domain');
const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/Employees';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

class Emps{
    static all(req,res,next){
        const EmpData = require('../Models/Employee.Model');
        EmpData.find().select().exec((err,result)=>{
            res.send(result)
        })
    }

    static ID(req,res,next){
        const EmpData = require('../Models/Employee.Model');
        EmpData.find({Id: parseInt(req.params.id)}).select().exec((err,result)=>{
            res.send(result)
        })
    }
    
    static create(req,res,next){
        const EmpData = require('../Models/Employee.Model');
        const instance = new EmpData(req.body);
        instance.save((err)=>{
            if(err) console.log(err);
            res.send("done")
        });
    }

    static login(req,res,next){
        const domain = new LoginDomain();
        domain.login(req,res,next);
    }

    static Delete(req,res,next){
        const EmpData = require('./EmpData');
        EmpData.remove({Id: parseInt(req.params.id)}).then(()=>{
            res.send(
                req.params.id+" is removed"
            );
        });
    }
}

router.get('/all',Security,Emps.all);

router.get('/:id',Security,Emps.ID)

router.post('/login',express.json(),Emps.login);

router.post('/create',[Security,express.json()],Emps.create);

router.get('/:id/delete',Security,Emps.Delete);

module.exports = router;