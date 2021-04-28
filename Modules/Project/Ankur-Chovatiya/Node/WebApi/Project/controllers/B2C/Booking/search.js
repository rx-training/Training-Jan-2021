const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../../MongoDB/model');


class Search {

    static async searchFlight(req , res , next){
        

        model.Flight.find(req.body).then(result =>{
            
            res.send(result);
            next();
        }).catch(err=>{
            if(err) throw err;
            res.send('unable to find data');
        });

    }


}




router.post('/' ,[express.json()] , Search.searchFlight);


module.exports = router;