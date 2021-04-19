const express = require('express');
const router = express.Router();
const fs = require('fs');
const jwt = require('jsonwebtoken');
global.config = require('./Config');
const Security = require('./Security');
const mongoose = require('mongoose');

const mongoDB = 'mongodb://127.0.0.1/Employees';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });


class Emps{
    static all(req,res,next){
        const EmpData = require('./EmpData');
        EmpData.find().select().exec((err,result)=>{
            res.send(result)
        })
    }

    static ID(req,res,next){
        const EmpData = require('./EmpData');
        EmpData.find({Id: parseInt(req.params.id)}).select().exec((err,result)=>{
            res.send(result)
        })
    }
    

    static login(req,res,next){
        let userdata = {
            username: req.body.username,
            password: req.body.password
        };
    
        let token = jwt.sign({ username: req.body.username }, global.config.secretKey, {
            algorithm: global.config.algorithm,
            expiresIn: '30m'
        });
          
        
        if (userdata.username == "admin" && userdata.password == "admin") {
            res.status(200).json({
            message: 'Login Successful',
            jwtoken: token
        });
        }
        else {
            res.status(401).json({
            message: 'Login Failed',
        });
        }
    }

    static create(req,res,next){
        const EmpData = require('./EmpData');
        const instance = new EmpData(req.body);
        instance.save((err)=>{
            if(err) console.log(err);
            res.send("done")
        });
    }
}

router.get('/all',Security,Emps.all);

router.get('/:id',Security,Emps.ID)

router.post('/login',express.json(),Emps.login);

router.post('/create',[Security,express.json()],Emps.create);

module.exports = router;