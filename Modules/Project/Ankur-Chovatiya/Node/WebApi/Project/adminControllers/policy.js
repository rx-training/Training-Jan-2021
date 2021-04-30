const express = require('express');
const app = express();
const router = express.Router();
const model = require('../MongoDB/model');


class Policy {

    static async addPolicy(req , res , next) {
        let policy = new model.Policy(req.body);
        policy.save().then(result =>{
            res.send("data saved successfully!");
            next();
        }).catch(err =>{
            res.send("unable to save data!");
            next();
        })
    }
    static async deletePolicy(req , res , next) {
        let id = req.params.id;
        model.Policy.deleteOne({PolicyId:id})
        .then(result =>{
            res.send("data deleted successfully!");
            next();
        }).catch(err =>{
            res.send("unable to delete data!");
            next();
        })
    }


}

router.post('/addPolicy' ,[express.json()] ,Policy.addPolicy);
router.delete('/:id/delete' , [express.json()] , Policy.deletePolicy);
module.exports = router;



