const express = require('express')
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Services = require('../Models/Service.Model')

const mongoDB = 'mongodb://127.0.0.1/OLX';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

class Service{
    static addData(req,res,next){
        const Service = new Services(req.body);
        Service.save().then(()=>{
            res.send("Data Added Successfully");
        });
    }

    static allData(req,res,next){
        Services.find().select().exec((err,result)=>{
            res.send(result)
        });
    }
}

router.post('/insert',express.json(),Service.addData);

router.get('/all',Service.allData);

module.exports = router;