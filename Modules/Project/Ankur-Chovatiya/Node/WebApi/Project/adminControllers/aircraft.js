const express = require('express');
const app = express();
const router = express.Router();
const model = require('../MongoDB/model');


class Aircraft {

    static async addAircraft(req , res , next) {
        let aircraft = new model.Aircraft(req.body);
        aircraft.save().then(result =>{
            res.send("data saved successfully!");
            next();
        }).catch(err =>{
            res.send("unable to save data!");
            next();
        })
    }
    static async deleteAircraft(req , res , next) {
        let id = req.params.id;
        model.Aircraft.deleteOne({AircraftId:id})
        .then(result =>{
            res.send("data deleted successfully!");
            next();
        }).catch(err =>{
            res.send("unable to delete data!");
            next();
        })
    }


}

router.post('/addAircraft' ,[express.json()] ,Aircraft.addAircraft);
router.delete('/:id/delete' , [express.json()] , Aircraft.deleteAircraft);
module.exports = router;



