const express = require('express');
const app = express();
const router = express.Router({mergeParams: true});
const security = require('../../Authentication/jwt')
const fs = require('fs');
const models = require('../../../mongoDB/Model');



const bodyParser = require('body-parser');
const { model } = require('mongoose');
app.use(bodyParser.urlencoded({ extended: false }));

class AssignmentRouter{

    static addAssignment(req , res , next){
        console.log(req.body);
        let data = req.body;
        let EmpModels =  new model.emp(req.body);


        let Assignment =new models.Assignment(data);
        Assignment.save().then(item => {
            res.send("item saved to database");
            })
            .catch(err => {
                console.log(err);
            res.status(400).send("unable to save to database");
            });
    
            res.send('Data save successfully!')
            next();   
    }

    static getAllAssignment(req , res , next) {
        models.Assignment.find().select().exec((err,result)=>{
            if(err) console.log(err);
            res.send(result );
            next();
        });
       
    }

    static getOneAssignment(req , res , next){
        let aID = req.params.aid;
        res.send('assignemnt 1 is here!');
    }


    static updateAssignment(req , res , next){
        let aID = req.params.aid;
        res.send('assignment 1 is successfully updated');
    }

}

router.post('/addAssignment' ,[express.json()],AssignmentRouter.addAssignment);
router.get('/all' ,[express.json()], AssignmentRouter.getAllAssignment);
router.get('/:aid', [security],AssignmentRouter.getOneAssignment);
router.put('/:aid' ,[express.json(),security], AssignmentRouter.updateAssignment);


module.exports = router;