const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../../MongoDB/model');
const _ = require('lodash');
const { loginSchema } = require('../../../MongoDB/Schema');

class SeatMap {

    static async selectSeat(req , res , next){
        // console.log('hi');
        // console.log(req.body);

        var searchObj = _.pick(req.body ,['TakeoffPoint','LandingPoint', 'TackoffDate', 'LandingDate','Economy'])

        model.Flight.findOne(searchObj).populate('Aircraft').then(result =>{
           
           let seats = result.Aircraft.Seats;
        //    let seat = _.remove(seats , function(n){
        //        return n == req.body.SeatNo
        //    });
            console.log(req.body.seats);    
           console.log(seats);
           let craftId =  parseInt(req.body.AircraftId)
           let SelectedSeat = req.body.seats
           console.log(SelectedSeat);
          const updatedseats = seats.filter(s => !SelectedSeat.includes(s) ) 
           
           console.log(updatedseats);
            res.send(result.Aircraft.Seats);

            model.Aircraft.updateOne({AircraftId:craftId},{
                $set : {"Seats":updatedseats}
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