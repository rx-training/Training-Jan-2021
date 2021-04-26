const express = require('express');

const router = express.Router({mergeParams : true});
const model = require('../MongoDB/model');


router.get('/' , (req , res , next)=>{
    res.send('department controller is working fine!');
    next();
})

class Doctor {
        
    static async addDepartment(req , res , next){
        let data = req.body;
        let doctor =new model.Department(data)
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
}

router.post('/addDepartment' , [express.json()] , Doctor.addDepartment);


module.exports = router;