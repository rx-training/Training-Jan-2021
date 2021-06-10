const express = require('express')
const bcrypt = require('bcrypt');
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Users = require('../Models/User.Model')
const UserLoginDomain = require('../Domains/UserLogin.Domain');
const Security = require('../Middlewares/Security.Middleware');

const mongoDB = 'mongodb://127.0.0.1/OLX';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

const Otp = Math.floor(100000 + Math.random() * 900000);
const domain = new UserLoginDomain(Otp);

class User{
    static addData(req,res,next){
        const User = new Users(req.body);
        const salt = bcrypt.genSaltSync(10);
        User.Password = bcrypt.hashSync(User.Password, salt);
        User.save().then((data)=>{
            res.send(data)
        });
    }

    static allData(req,res,next){
        Users.find().populate({path:'Ads',populate:[{path:'Image'},{path:'ContactNumber'},{path:'Location'},{path:'Services',populate:{path:'Services'}}]}).select().exec((err,result)=>{
            res.send(result)
        });
    }

    static idData(req,res,next){
        Users.find({UserId: req.params.id}).populate({path:'Ads',populate:[{path:'Image'},{path:'ContactNumber'},{path:'Location'},{path:'Services',populate:{path:'Services'}}]}).select().exec((err,result)=>{
            res.send(result)
        });
    }

    static addAd(req,res,next){
        Users.updateOne({UserId: req.params.id},{$push: req.body}).then(()=>{
            res.send(req.body+"is updated");
        });
    }

    static login(req,res,next){
        domain.login(req,res,next);
    }

    static verifyOtp(req,res,next){
        domain.verifyOtp(req,res,next);
    }
}

router.post('/insert',express.json(),User.addData);

router.get('/all',User.allData);

router.get('/:id',User.idData);

router.put('/:id/update',[Security,express.json()],User.addAd);

router.post('/login',express.json(),User.login);

router.post('/verifyotp',express.json(),User.verifyOtp);

module.exports = router;