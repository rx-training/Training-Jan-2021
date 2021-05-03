const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../../MongoDB/model');
const auth = require('../../../Middelware/jwt');
const _ = require('lodash');


class Select {

    static async selectFlight(req , res , next){
        
        var searchObj = _.pick(req.body ,['TakeoffPoint','LandingPoint', 'TackoffDate', 'LandingDate','Economy'])
        model.Flight.findOne(searchObj).populate('AirFare').then(result =>{
            res.send(result);
            next();
        }).catch(err=>{
            if(err) throw err;
            res.send('unable to find data');
        });

    }


}




router.post('/' ,[express.json() , auth] , Select.selectFlight);


module.exports = router;