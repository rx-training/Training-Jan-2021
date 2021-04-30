const express = require('express');
const router = express.Router({mergeParams: true});
const mongoose = require('mongoose');
const Doctors = require('../Models/Doctor.Model');

const mongoDB = 'mongodb://127.0.0.1/Hospital';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true });

class Doctor{
    static addDoctor(req,res,next){
        const doctors = new Doctors(req.body);
        doctors.save(()=>{
            res.send("Doctor api created");
        });
    }

    static updateDoctor(req,res,next){
        Doctors.updateOne(req.body,{$set: req.body}).then(()=>{
            res.send(req.body+"is updated");
        })
    }

    static deleteDoctor(req,res,next){
        Doctors.remove(req.body).then(()=>{
            res.send(req.body+"is deleted");
        })
    }

    static patientReport(req,res,next){
        Doctors.find(req.body).populate('Patients','PatientName -_id').select('Patients').exec((err,result)=>{
            res.send(result)
        });
    }

    static summaryReport(req,res,next){
        Doctors.find().populate({path: 'Patients',populate:{path:'Consuming'}}).populate('ServingIn').populate('Assistants').select().exec((err,result)=>{
            res.send(result)
        });
    }
}


router.post('/insert',express.json(),Doctor.addDoctor);

router.put('/update',express.json(),Doctor.updateDoctor);

router.put('/delete',express.json(),Doctor.deleteDoctor);

router.post('/report',express.json(),Doctor.patientReport);

router.get('/summary',Doctor.summaryReport);

module.exports = router;