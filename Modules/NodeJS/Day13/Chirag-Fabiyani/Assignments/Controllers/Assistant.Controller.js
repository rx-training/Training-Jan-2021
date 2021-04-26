const express = require('express');
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Assistants = require('../Models/Assistant.Model')

const mongoDB = 'mongodb://127.0.0.1/Hospital';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

class Assistant{
    static addAssistant(req,res,next){
        const assistants = new Assistants(req.body);
        assistants.save().then(()=>{
            res.send("Done")
        });
    }
}

router.post('/insert',express.json(),Assistant.addAssistant);

module.exports = router;