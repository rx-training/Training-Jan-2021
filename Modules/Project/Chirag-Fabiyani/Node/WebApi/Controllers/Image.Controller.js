const express = require('express')
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Images = require('../Models/Image.Model')
const fs = require('fs');

const mongoDB = 'mongodb://127.0.0.1/OLX';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

class Image{
    static addData(req,res,next){
        const Image = new Images();
        Image.ImgId = req.body.ImgId;
        Image.AdId = req.body.AdId;
        Image.Image.data = fs.readFileSync('../Assets/628-200x300.jpg');
        Image.Image.contentType = 'Image/jpg';
        Image.save().then(()=>{
            res.send("Data Added Successfully");
        });
    }
}

router.post('/insert',express.json(),Image.addData);

module.exports = router;