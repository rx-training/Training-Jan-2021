const express = require('express');
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Patients = require('../Models/Patient.Model');

const mongoDB = 'mongodb://127.0.0.1/Hospital';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

class Patient{
    static addPatient(req,res,next){
        const patients = new Patients(req.body);
        patients.save(()=>{
            res.send("Patient api created");
        });
    }
    static MedicineList(req,res,next){
        Patients.find(req.body).populate('Consuming').select('Consuming').exec((err,result)=>{
            res.send(result)
        });
    }
    static summaryReport(req,res,next){
        Patients.find().populate('Consuming').select().exec((err,result)=>{
            res.send(result)
        });
    }
}


router.post('/insert',express.json(),Patient.addPatient);

router.post('/list',express.json(),Patient.MedicineList);

router.get('/summary',Patient.summaryReport);

module.exports = router;