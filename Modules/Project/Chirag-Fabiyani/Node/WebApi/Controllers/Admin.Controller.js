const express = require('express')
const bcrypt = require('bcrypt');
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Admins = require('../Models/Admin.Model');
const LoginDomain = require('../Domains/Login.Domain');
const Security = require('../Middlewares/Security.Middleware');

const mongoDB = 'mongodb://127.0.0.1/OLX';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

const Otp = Math.floor(100000 + Math.random() * 900000);
const domain = new LoginDomain(Otp);

class UserAdmin{
    static addData(req,res,next){
        const Admin = new Admins(req.body);
        const salt = bcrypt.genSaltSync(10);
        Admin.Password = bcrypt.hashSync(Admin.Password, salt);
        Admin.save().then(()=>{
            res.send("Data Added Successfully");
        });
    }

    static allData(req,res,next){
        Admins.find().select().exec((err,result)=>{
            res.send(result)
        });
    }

    static login(req,res,next){
        domain.login(req,res,next);
    }

    static verifyOtp(req,res,next){
        domain.verifyOtp(req,res,next);
    }
}

router.post('/insert',[Security,express.json()],UserAdmin.addData);

router.get('/all',UserAdmin.allData);

router.post('/login',express.json(),UserAdmin.login);

router.post('/verifyotp',express.json(),UserAdmin.verifyOtp);

module.exports = router;