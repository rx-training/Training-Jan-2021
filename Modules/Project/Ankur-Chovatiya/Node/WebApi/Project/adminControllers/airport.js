const express = require('express');
const app = express();
const router = express.Router();
const model = require('../MongoDB/model');


class Airport {

    static async addAirport(req , res , next) {
        let airport = new model.Airport(req.body);
        airport.save().then(result =>{
            res.send("data saved successfully!");
            next();
        }).catch(err =>{
            res.send("unable to save data!");
            next();
        })
    }

    static async deleteAirport(req , res , next) {
        let id = req.params.id;
        model.Airport.deleteOne({AirportId:id})
        .then(result =>{
            res.send("data deleted successfully!");
            next();
        }).catch(err =>{
            res.send("unable to delete data!");
            next();
        })
    }


}

router.post('/addAirport' ,[express.json()] ,Airport.addAirport);
router.delete('/:id/delete' , [express.json()] , Airport.deleteAirport);
module.exports = router;



