const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../../MongoDB/model');


class Details {

    static async details(req , res , next){
        
        let passenger = new model.Passenger(req.body);
        passenger.save().then(result =>{
            res.send("Data saved successfully!")
            console.log("data saved successfully!");
        }).catch(err =>{
            if(err) throw err;
            res.send("unable to save data!");
        })

    }

    static async updateDetails(req , res , next){
        model.Passenger.aggregate([
            {
                $addFields : {seats : req.body}
            }
        ]).exec((err , data) =>{
            if(err) throw err;
            // console.log(data);
            res.send('work done')
            // console.log('seats added successfully');
            next()
        })
        
    }


}



router.post('/' ,[express.json()] , Details.details);
router.post('/add-seat' , [express.json()] , Details.updateDetails);

module.exports = router;