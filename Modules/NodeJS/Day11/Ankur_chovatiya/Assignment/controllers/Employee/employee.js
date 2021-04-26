const express = require('express');
const models = require('../../mongoDB/Model'); 

const router = express.Router();
const security = require('../Authentication/jwt');
const assiRouter = require('./Assignment/assignment');


class EmployeeRouter {
    static getAllEmployee(req , res , next){
        // let employee = new models.Employee;
    
        models.Employee.find().select().exec((err,result)=>{
            if(err) console.log(err);
            res.send(result);
        });
     
    
        
        next();
    
    }    

    static saveEmployee(req , res , next){
        console.log(req.body);
            let mydata = new models.Employee(req.body);
            console.log(mydata);
        
            mydata.save().then(item => {
                res.send("item saved to database");
                })
                .catch(err => {
                    console.log(err);
                res.status(400).send("unable to save to database");
                });
        
                res.send('Data save successfully!')
                next();   
            } 
}



router.post('/all' ,[express.json()],EmployeeRouter.saveEmployee);
router.get('/all',[express.json()], EmployeeRouter.getAllEmployee);
router.use('/:id/assignment', assiRouter);


module.exports = router;