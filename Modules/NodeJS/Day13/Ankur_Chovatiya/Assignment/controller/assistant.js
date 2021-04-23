const express = require('express');

const router = express.Router({mergeParams : true});
const model = require('../MongoDB/model');

router.get('/' , (req , res , next)=>{
    res.send('assistant controller is working fine!');
    next();
})


class Assistant {
        
    static async addAssistant(req , res , next){
        let data = req.body;
        let doctor =new model.Assistant(data)
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

router.post('/addAssistant' , [express.json()],Assistant.addAssistant);

module.exports = router;