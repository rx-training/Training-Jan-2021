const express = require('express');
const router = express.Router();
const fs = require('fs');
const Security = require('../Middlewares/Security.Middleware');
const LoginDomain = require('../Domains/Login.Domain');

class Emps{
    static all(req,res,next){
        fs.readFile('../../Data.json','utf8',(err,data)=>{
            data=JSON.parse(data);
            res.send(data);
        });
    }

    static ID(req,res,next){
        fs.readFile('../../Data.json','utf8',(err,data)=>{
            data=JSON.parse(data);
            const Employee = data.find(d=>d.Id==req.params.id);
            res.send(Employee);
        });
    }
    
    static update(req,res,next){
        fs.readFile('../../Data.json','utf8',(err,data)=>{
            data=JSON.parse(data);
            const Employee = data.find(d=>d.Id==req.params.id);
            Employee.Address.line1 = req.body.Address.line1;
            fs.writeFile('../Data.json',JSON.stringify(data),(err)=>{
                if(err){console.log(err)}
            });
        });
    }

    static login(req,res,next){
        const domain = new LoginDomain();
        domain.login(req,res,next);
    }
}

router.get('/all',Security,Emps.all);

router.get('/:id',Security,Emps.ID)

router.put('/:id/update',[Security,express.json()],Emps.update);

router.post('/login',express.json(),Emps.login);

module.exports = router;