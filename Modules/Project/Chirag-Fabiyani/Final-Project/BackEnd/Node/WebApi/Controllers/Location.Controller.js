const express = require('express')
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Locations = require('../Models/Location.Model');

const mongoDB = 'mongodb://127.0.0.1/OLX';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

class Location{
    static addData(req,res,next){
        const Location = new Locations(req.body);
        Location.save().then(()=>{
            res.send("Data Added Successfully");
        });
    }
}

router.post('/insert',express.json(),Location.addData);

module.exports = router;