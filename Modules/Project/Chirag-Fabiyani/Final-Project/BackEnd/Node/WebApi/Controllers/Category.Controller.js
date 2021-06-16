const express = require('express')
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Categories = require('../Models/Category.Model')

const mongoDB = 'mongodb://127.0.0.1/OLX';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

class Category{
    static addData(req,res,next){
        const Category = new Categories(req.body);
        Category.save().then(()=>{
            res.send("Data Added Successfully");
        });
    }

    static allData(req,res,next){
        Categories.find().select().exec((err,result)=>{
            res.send(result[0])
        });
    }
}

router.post('/insert',express.json(),Category.addData);

router.get('/all',Category.allData);

module.exports = router;