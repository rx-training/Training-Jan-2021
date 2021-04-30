const express = require('express')
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Users = require('../Models/User.Model')

const mongoDB = 'mongodb://127.0.0.1/OLX';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

class User{
    static addData(req,res,next){
        const User = new Users(req.body);
        User.save().then(()=>{
            res.send("Data Added Successfully");
        });
    }

    static allData(req,res,next){
        Users.find().populate({path:'Ads',populate:[{path:'Image'},{path:'ContactNumber'},{path:'Location'},{path:'Services',populate:{path:'Services'}}]}).select().exec((err,result)=>{
            res.send(result)
        });
    }

    static idData(req,res,next){
        Users.find({ContactNumber: req.params.id}).populate({path:'Ads',populate:[{path:'Image'},{path:'ContactNumber'},{path:'Location'},{path:'Services',populate:{path:'Services'}}]}).select().exec((err,result)=>{
            res.send(result)
        });
    }

    static addAd(req,res,next){
        Users.updateOne({ContactNumber: req.params.id},{$push: req.body}).then(()=>{
            res.send(req.body+"is updated");
        });
    }
}

router.post('/insert',express.json(),User.addData);

router.get('/all',User.allData);

router.get('/:id',User.idData);

router.put('/:id/update',express.json(),User.addAd);

module.exports = router;