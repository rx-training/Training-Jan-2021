const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../../MongoDB/model');


class Details {

    static async details(req , res , next){
        
        let passenger = new model.Passenger(req.body);
        passenger.save().then(result =>{
            res.send("Data saved successfully!")
        }).catch(err =>{
            if(err) throw err;
            res.send("unable to save data!");
        })

    }


}



router.post('/' ,[express.json()] , Details.details);


module.exports = router;