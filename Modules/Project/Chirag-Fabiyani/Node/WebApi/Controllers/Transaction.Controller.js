const express = require('express')
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Transactions = require('../Models/Transaction.Model')

const mongoDB = 'mongodb://127.0.0.1/OLX';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

class Transaction{
    static addData(req,res,next){
        const Transaction = new Transactions(req.body);
        Transaction.save().then(()=>{
            res.send("Data Added Successfully");
        });
    }

    static allData(req,res,next){
        Transactions.find().populate('Services').select().exec((err,result)=>{
            res.send(result)
        });
    }

    static idData(req,res,next){
        Transactions.find({AdId: parseInt(req.params.id)}).populate('Services').select().exec((err,result)=>{
            res.send(result)
        });
    }
}

router.post('/insert',express.json(),Transaction.addData);

router.get('/all',Transaction.allData);

router.get('/:id',Transaction.idData);

module.exports = router;