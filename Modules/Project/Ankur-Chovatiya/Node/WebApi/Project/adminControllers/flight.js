const express = require('express');
const app = express();
const router = express.Router();
const model = require('../MongoDB/model');


class Flight {

    static async addFlight(req , res , next) {
        let flight = new model.Flight(req.body);
        flight.save().then(result =>{
            res.send("data saved successfully!");
            next();
        }).catch(err =>{
            res.send("unable to save data!");
            next();
        })
    }
    static async deleteFlight(req , res , next) {
        let id = req.params.id;
        model.Flight.deleteOne({FlightId:id})
        .then(result =>{
            res.send("data deleted successfully!");
            next();
        }).catch(err =>{
            res.send("unable to delete data!");
            next();
        })
    }


}

router.post('/addFlight' ,[express.json()] ,Flight.addFlight);
router.delete('/:id/delete' , [express.json()] , Flight.deleteFlight);
module.exports = router;



