const express = require('express');
const router = express.Router();
const fs = require('fs');

class Emps{
    static all(req,res,next){
        fs.readFile('../Data.json','utf8',(err,data)=>{
            data=JSON.parse(data);
            res.send(data);
        });
    }

    static ID(req,res,next){
        fs.readFile('../Data.json','utf8',(err,data)=>{
            data=JSON.parse(data);
            const Employee = data.find(d=>d.Id==req.params.id);
            res.send(Employee);
        });
    }
    
    static update(req,res,next){
        fs.readFile('../Data.json','utf8',(err,data)=>{
            data=JSON.parse(data);
            const Employee = data.find(d=>d.Id==req.params.id);
            Employee.Address.line1 = req.body.Address.line1;
            fs.writeFile('../Data.json',JSON.stringify(data),(err)=>{
                if(err){console.log(err)}
            });
        });
    }
}


router.get('/all',Emps.all);

router.get('/:id',Emps.ID);

router.put('/:id/update',express.json(),Emps.update);

module.exports = router;