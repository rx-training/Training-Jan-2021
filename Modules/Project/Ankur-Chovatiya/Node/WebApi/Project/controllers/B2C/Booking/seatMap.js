const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../../MongoDB/model');


class SeatMap {

    static async selectSeat(req , res , next){
        

        model.Flight.findOne(req.body).populate('Aircraft').then(result =>{
            res.send(result.Aircraft.Seats);
            next();
        }).catch(err=>{
            if(err) throw err;
            res.send('unable to find data');
        });

    }

}

router.post('/' ,[express.json()] , SeatMap.selectSeat);


module.exports = router;