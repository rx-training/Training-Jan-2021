const express = require('express');
const app = express();
const router = express.Router();
const model = require('../MongoDB/model');


class Route {

    static async addRoute(req , res , next) {
        let route = new model.Route(req.body);
        route.save().then(result =>{
            res.send("data saved successfully!");
            next();
        }).catch(err =>{
            res.send("unable to save data!");
            next();
        })
    }
    static async deleteRoute(req , res , next) {
        let id = req.params.id;
        model.Route.deleteOne({RouteId:id})
        .then(result =>{
            res.send("data deleted successfully!");
            next();
        }).catch(err =>{
            res.send("unable to delete data!");
            next();
        })
    }


}

router.post('/addRoute' ,[express.json()] ,Route.addRoute);
router.delete('/:id/delete' , [express.json()] , Route.deleteRoute);

module.exports = router;



