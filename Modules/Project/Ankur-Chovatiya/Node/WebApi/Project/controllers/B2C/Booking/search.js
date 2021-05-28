const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../../MongoDB/model');
const auth = require('../../../Middelware/jwt');
const _ = require('lodash');


class Search {

    static async searchFlight(req , res , next){
        // console.log(req.body);
        var searchObj = _.pick(req.body ,['TakeoffPoint','LandingPoint', 'TackoffDate', 'LandingDate','Economy'])
        // console.log(searchObj);
        model.Flight.find(searchObj).then(result =>{
            
            res.send(result);
            next();
        }).catch(err=>{
            if(err) throw err;
            res.send('unable to find data');
            next();
        });

    }


}




router.post('/' ,[express.json() , auth] , Search.searchFlight);


module.exports = router;