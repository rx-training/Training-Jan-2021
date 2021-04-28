const express = require('express');
const app = express();
const router = express.Router();
const model = require('../MongoDB/model');


class Offer {

    static async addOffer(req , res , next) {
        let offer = new model.Offer(req.body);
        offer.save().then(result =>{
            res.send("data saved successfully!");
            next();
        }).catch(err =>{
            res.send("unable to save data!");
            next();
        })
    }
    static async deleteOffer(req , res , next) {
        let id = req.params.id;
        model.Offer.deleteOne({OfferId:id})
        .then(result =>{
            res.send("data deleted successfully!");
            next();
        }).catch(err =>{
            res.send("unable to delete data!");
            next();
        })
    }


}

router.post('/addOffer' ,[express.json()] ,Offer.addOffer);
router.delete('/:id/delete' , [express.json()] , Offer.deleteOffer);
module.exports = router;



