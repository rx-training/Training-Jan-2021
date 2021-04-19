const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();
const jwt = require('jsonwebtoken');
global.config = require('../config');
const fs = require('fs');
const security = require('../security/jwt');

router.get('/' ,(req , res , next)=>{
    res.send(' student Router is working fine.');
    next();
});





router.get('/:id/:key' ,[security] ,(req , res)=>{
    console.log('hello');
    fs.readFile('./students.json' , 'utf8' , (err , data)=>{
        let dat = JSON.parse(data);
        let student = dat.find(s => s.ID == req.params.id );
        let catagry = req.params.key;
        console.log(catagry);
        
        if(catagry == 'fees'){
            res.send(student.Fees)
        }
        else if(catagry == 'result'){
            res.send(student.Result);
        }
       next();
    })
})

module.exports = router;