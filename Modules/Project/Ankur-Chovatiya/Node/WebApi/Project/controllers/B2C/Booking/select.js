const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../../MongoDB/model');


class Select {

    static async selectFlight(req , res , next){
        

        model.Flight.findOne(req.body).populate('AirFare').then(result =>{
            res.send(result);
            next();
        }).catch(err=>{
            if(err) throw err;
            res.send('unable to find data');
        });

    }


}




router.post('/' ,[express.json()] , Select.selectFlight);


module.exports = router;