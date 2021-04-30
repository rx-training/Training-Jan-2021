const express = require('express')
const bcrypt = require('bcrypt');
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Admins = require('../Models/Admin.Model');
const LoginDomain = require('../Domains/Login.Domain');
const Security = require('../Middlewares/Security.Middleware');

const mongoDB = 'mongodb://127.0.0.1/OLX';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

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
        const domain = new LoginDomain();
        domain.login(req,res,next);
    }
}

router.post('/insert',[Security,express.json()],UserAdmin.addData);

router.get('/all',Security,UserAdmin.allData);

router.post('/login',express.json(),UserAdmin.login);

module.exports = router;