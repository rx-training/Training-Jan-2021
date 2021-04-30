const express = require('express');
const app = express();
const router = express.Router();
const model = require('../MongoDB/model');


class AirFare {

    static async addAirFare(req , res , next) {
        let airfare = new model.AirFare(req.body);
        airfare.save().then(result =>{
            res.send("data saved successfully!");
            next();
        }).catch(err =>{
            res.send("unable to save data!");
            next();
        })
    }
    static async deleteAirFare(req , res , next) {
        let id = req.params.id;
        model.AirFare.deleteOne({AirFareId:id})
        .then(result =>{
            res.send("data deleted successfully!");
            next();
        }).catch(err =>{
            res.send("unable to delete data!");
            next();
        })
    }


}

router.post('/addAirfare' ,[express.json()] ,AirFare.addAirFare);
router.delete('/:id/delete' , [express.json()] , AirFare.deleteAirFare);
module.exports = router;



