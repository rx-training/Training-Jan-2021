const express = require('express');
const router = express.Router({mergeParams: true});
const fs = require('fs');

class Assignments{
    static all(req,res,next){
        fs.readFile('../../Data.json','utf8',(err,data)=>{
            data=JSON.parse(data);
            const Employee = data.find(d=>d.Id==req.params.id);
            res.send(Employee.Assignments);
        });
    }

    static AID(req,res,next){
        fs.readFile('../../Data.json','utf8',(err,data)=>{
            data=JSON.parse(data);
            const Employee = data.find(d=>d.Id==req.params.id);
            const Assignment = Employee.Assignments.find(d=>d.AssignmentId==req.params.aid);
            res.send(Assignment);
        });
    }

    static update(req,res,next){
        fs.readFile('../../Data.json','utf8',(err,data)=>{
            data=JSON.parse(data);
            const Employee = data.find(d=>d.Id==req.params.id);
            const Assignment = Employee.Assignments.find(d=>d.AssignmentId==req.params.aid);
            Assignment.DepartmentId = req.body.DepartmentId;
            fs.writeFile('../Data.json',JSON.stringify(data),(err)=>{
                if(err){console.log(err)}
            });
        });
    }
}

router.get('/all',Assignments.all);

router.get('/:aid',Assignments.AID);

router.put('/:aid/update',express.json(),Assignments.update);

module.exports = router;