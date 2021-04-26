const express = require('express');

const router = express.Router({mergeParams : true});
const model = require('../MongoDB/model');


router.get('/' , (req , res , next)=>{
    res.send('doctor controller is working fine!');
    next();
})

class Doctor {
        
    static async addDoctor(req , res , next){
        let data = req.body;
        let doctor =new model.Doctor(data)
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

    static async updateDoctor(req , res , next){
        let id = req.body.Id;
      

        model.Doctor.update({Id:id},{
            $set : req.body
            
        }).then(result =>{
            res.send("item saved to database");
        })
        .catch(err => {
            console.log(err);
        res.status(400).send("unable to save to database");
        });
        
       }
      
       static async deleteDoctor(req , res , next){
            let id = req.params.id;
            console.log(id);

            model.Doctor.deleteOne({Id:id}).then(result =>{
                res.send("item deleted to database");
            })
            .catch(err => {
                console.log(err);
            res.status(400).send("unable to delete to database");
            });
        
       }
      
       static async doctorWithpatient(req , res , next){
            let id = parseInt( req.params.id);
            console.log(id);
            model.Doctor.find({Id : id}).populate('Patients').select()
            .then(result =>{
                res.send(result);
            })
            .catch(err => {
                console.log(err);
            res.status(400).send("unable to get to database");
        });
    
   }

   static async patientreport(req , res , next){
    let id = parseInt( req.params.id);
    console.log(id);
    model.Doctor.find({Id : id}).populate('Patients' , 'patientName illness patientAge').select('Name Id')
    .then(result =>{
        res.send(result);
    })
    .catch(err => {
        console.log(err);
    res.status(400).send("unable to get to database");
});

}


}

router.post('/addDoctor' , [express.json()] , Doctor.addDoctor);
router.put('/updateDoctor' , [express.json()] , Doctor.updateDoctor);
router.delete('/:id/deleteDoctor' , [express.json()] , Doctor.deleteDoctor);
router.get('/:id/doctorWithpatient' , [express.json()] , Doctor.doctorWithpatient);
router.get('/:id/patientreport' , [express.json()] , Doctor.patientreport);

module.exports = router;