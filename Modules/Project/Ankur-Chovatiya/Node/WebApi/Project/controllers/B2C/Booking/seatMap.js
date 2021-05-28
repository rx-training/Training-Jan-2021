const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../../MongoDB/model');
const _ = require('lodash');

class SeatMap {

    static async selectSeat(req , res , next){
        var searchObj = _.pick(req.body ,['TakeoffPoint','LandingPoint', 'TackoffDate', 'LandingDate','Economy'])

        model.Flight.findOne(searchObj).populate('Aircraft').then(result =>{
           
           let seats = result.Aircraft.Seats;
           let seat = _.remove(seats , function(n){
               return n == req.body.SeatNo
           });
           console.log(seats);
           console.log(seat);
            res.send(result.Aircraft.Seats);
            model.Aircraft.updateOne({AircraftNumber:"A-001"},{
                $set : {"Seats":seats}
            }).exec((err , data) =>{
                if(err) throw err;
                console.log('seat updated successfully!');
            })
            next();
        }).catch(err=>{
            if(err) throw err;
            res.send('unable to find data');
        });

    }

}

router.post('/' ,[express.json()] , SeatMap.selectSeat);


module.exports = router;