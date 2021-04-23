const express = require('express');

const router = express.Router({mergeParams : true});
const model = require('../MongoDB/model');

router.get('/' , (req , res , next)=>{
    res.send('patient controller is working fine!');
    next();
})

class Patient {
        
    static async addPatient(req , res , next){
        let data = req.body;
        let doctor =new model.Patient(data)
        doctor.save().then(item => {
            res.send("item saved to database");
            })
            .catch(err => {
                console.log(err);
            res.status(400).send("unable to save to database");
            });
    
            res.send('Data save successfully!')
            next();   
    }
      

    static async medicineReport(req , res , next){
        let id = parseInt( req.params.id);
        console.log(id);
        model.Patient.find({patientId : id}).populate('medicines').select('patientName')
        .then(result =>{
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        res.status(400).send("unable to get data");
    });

}
}

router.post('/addPatient' , [express.json()] , Patient.addPatient);
router.get('/:id/medicinereport' , [express.json()] , Patient.medicineReport);


module.exports = router;