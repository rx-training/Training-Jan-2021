const express = require('express');
const app = express();
const router = express.Router();
const model = require('../MongoDB/model');


class Employee {

    static async addEmployee(req , res , next) {
        let employee = new model.Employee(req.body);
        employee.save().then(result =>{
            res.send("data saved successfully!");
            next();
        }).catch(err =>{
            if(err) throw err;
            res.send("unable to save data!");
            next();
        })
    }
    static async deleteEmployee(req , res , next) {
        let id = req.params.id;
        model.Employee.deleteOne({EmployeeId:id})
        .then(result =>{
            res.send("data deleted successfully!");
            next();
        }).catch(err =>{
            res.send("unable to delete data!" , err);
            next();
        })
    }


}

router.post('/addEmployee' ,[express.json()] ,Employee.addEmployee);
router.delete('/:id/delete' , [express.json()] , Employee.deleteEmployee);

module.exports = router;



