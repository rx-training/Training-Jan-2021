const express = require('express');

const router = express.Router({mergeParams : true});
const model = require('../MongoDB/model');

router.get('/' , (req , res , next)=>{
    res.send('Medicine controller is working fine!');
    next();
})


class Medicine {
        
    static async addMedicine(req , res , next){
        let data = req.body;
        let medicine =new model.Medicine(data)
        medicine.save().then(item => {
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

router.post('/addMedicine' , [express.json()], Medicine.addMedicine);

module.exports = router;