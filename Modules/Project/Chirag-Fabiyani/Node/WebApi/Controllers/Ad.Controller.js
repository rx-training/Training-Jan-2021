const express = require('express')
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Ads = require('../Models/Ad.Model')

const mongoDB = 'mongodb://127.0.0.1/OLX';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

class Ad{
    static addData(req,res,next){
        const Ad = new Ads(req.body);
        Ad.save().then(()=>{
            res.send("Data Added Successfully");
        });
    }

    static allData(req,res,next){
        Ads.find().populate('Image').populate('ContactNumber').populate('Location').populate({path:'Services',populate:{path:'Services'}}).select().exec((err,result)=>{
            res.send(result)
        });
    }

    static idData(req,res,next){
        Ads.find({AdId: parseInt(req.params.id)}).populate('ContactNumber').populate('Location').populate({path:'Services',populate:{path:'Services'}}).select().exec((err,result)=>{
            res.send(result)
        });
    }

    static idDataDelete(req,res,next){
        Ads.remove({AdId: parseInt(req.params.id)}).then(()=>{
            res.send("AdId: "+ req.params.id + "deleted successsfully");
        })
    }
}

router.post('/insert',express.json(),Ad.addData);

router.get('/all',Ad.allData);

router.get('/:id',Ad.idData);

router.delete('/:id',Ad.idDataDelete);

module.exports = router;