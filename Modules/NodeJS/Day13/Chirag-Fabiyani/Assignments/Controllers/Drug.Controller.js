const express = require('express');
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Drugs = require('../Models/Drug.Model')

const mongoDB = 'mongodb://127.0.0.1/Hospital';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

class Drug{
    static addDrug(req,res,next){
        const drugs = new Drugs(req.body);
        drugs.save().then(()=>{
            res.send("Done")
        });
    }
}

router.post('/insert',express.json(),Drug.addDrug);

module.exports = router;