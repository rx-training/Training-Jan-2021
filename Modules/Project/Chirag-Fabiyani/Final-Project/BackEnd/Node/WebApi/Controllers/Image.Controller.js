const express = require('express')
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Images = require('../Models/Image.Model')
const fs = require('fs');
const multer = require('multer')
const cloudinary = require('cloudinary').v2;
const Ads = require('../Models/Ad.Model')

const mongoDB = 'mongodb://127.0.0.1/OLX';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

cloudinary.config({
    cloud_name: "dzregsyjn",
    api_key:"256329753674653",
    api_secret:"QtKh1W-WB__uPjO-RvGgd3M4Ifw"
})

const storage = multer.diskStorage({})

const upload = multer({ 
    storage:storage,
});


router.post('/insert',express.json(),upload.array("file",8),async(req,res)=>{
    const img = req.files
    let arr=[]
    for(let i=0;i<img.length;i++){
        try{
            let result = await cloudinary.uploader.upload(img[i].path)
            arr.push(result)
        }
        catch(e){
            console.log(e)
        }
    }
    arr1 = arr.map(i=>i.secure_url)
    arr2 = arr.map(i=>i.public_id)
    Ads.updateOne({AdId: req.body.AdId},{$set: {Image:arr1,ImageManipulation:arr2}}).then(result=>{
        res.send(true)
    });
});

module.exports = router;