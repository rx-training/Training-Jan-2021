const express = require('express')
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Contacts = require('../Models/Contact.Model')

const mongoDB = 'mongodb://127.0.0.1/OLX';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

class Contact{
    static addData(req,res,next){
        const Contact = new Contacts(req.body);
        Contact.save().then(()=>{
            res.send("Data Added Successfully");
        });
    }
}

router.post('/insert',express.json(),Contact.addData);

module.exports = router;