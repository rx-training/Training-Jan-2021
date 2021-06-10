const express = require('express')
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Ads = require('../Models/Ad.Model')
const Security = require('../Middlewares/Security.Middleware')
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "dzregsyjn",
    api_key:"256329753674653",
    api_secret:"QtKh1W-WB__uPjO-RvGgd3M4Ifw"
})

const mongoDB = 'mongodb://127.0.0.1/OLX';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

class Ad{
    static addData(req,res,next){
        const Ad = new Ads(req.body);
        Ad.save().then(()=>{
            res.send(true);
        });
    }

    static allData(req,res,next){
        Ads.find().populate({path:'Services',populate:{path:'Services'}}).populate('User').select().exec((err,result)=>{
            res.send(result)
        });
    }

    static categoryData(req,res,next){
        Ads.find({Category: (req.body.data)}).populate({path:'Services',populate:{path:'Services'}}).populate('User').select().exec((err,result)=>{
            res.send(result)
        });
    }

    static searchedData(req,res,next){
        Ads.find({Category: { $regex: req.body.data }}).populate({path:'Services',populate:{path:'Services'}}).populate('User').select().exec((err,result)=>{
            res.send(result)
        });
    }

    static idData(req,res,next){
        Ads.find({AdId: req.params.id}).populate({path:'Services',populate:{path:'Services'}}).populate('User').select().exec((err,result)=>{
            res.send(result[0])
        });
    }

    static userData(req,res,next){
        Ads.find({User:{_id:(req.params.id)}}).populate({path:'Services',populate:{path:'Services'}}).populate('User').select().exec((err,result)=>{
            res.send(result)
        });
    }

    static idDataDelete(req,res,next){

        Ads.findOne({AdId:req.params.id}).then(result=>{
            result.ImageManipulation.forEach(i=>{
                cloudinary.uploader.destroy(i)
            })
        })

        Ads.remove({AdId: req.params.id }).then(()=>{
            res.send(true);
        })
    }
}

router.post('/insert',Security,express.json(),Ad.addData);

router.get('/all',Ad.allData);

router.post('/find',express.json(),Ad.categoryData);

router.post('/search',express.json(),Ad.searchedData);

router.get('/:id',express.json(),Ad.idData);

router.get('/user/:id',express.json(),Ad.userData);

router.delete('/:id',Security,Ad.idDataDelete);

module.exports = router;