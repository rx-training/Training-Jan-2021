const express = require('express');
const app = express();
const router = express.Router();
const model = require('../MongoDB/model');


class Address {

    static async addAddress(req , res , next) {
        let address = new model.Address(req.body);
        address.save().then(result =>{
            res.send("data saved successfully!");
            next();
        }).catch(err =>{
            res.send("unable to save data!");
            next();
        })
    }
    static async deleteAddress(req , res , next) {
        let id = req.params.id;
        model.Address.deleteOne({AddressId:id})
        .then(result =>{
            res.send("data deleted successfully!");
            next();
        }).catch(err =>{
            res.send("unable to delete data!");
            next();
        })
    }


}

router.post('/addAddress' ,[express.json()] ,Address.addAddress);
router.delete('/:id/delete' , [express.json()] , Address.deleteAddress);
module.exports = router;



