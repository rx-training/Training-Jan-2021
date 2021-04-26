const express = require('express');
const app = express();

app.use(express.json());
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


var childRouter = express.Router({mergeParams : true});
const fs = require('fs');

// landing url
childRouter.get('/',[express.json()],(req , res , next)=>{
   
    res.send('employees');
    next();
});


// all assignment
childRouter.get('/all',(req , res , next)=>{
    fs.readFile('assignment.json', 'utf8' , (err , data)=>{
        if(err) throw err;
        let dat = JSON.parse(data);
        // let dt = dat.find(a =>a.AssignmentId == req.params.id);
        res.send(dat);
        next();
    })  
});

// id data

childRouter.get('/:aID',(req , res , next)=>{
    fs.readFile('assignment.json', 'utf8' , (err , data)=>{
        if(err) throw err;
        let dat = JSON.parse(data);
        // console.log(req.params.id);
        // console.log(req.params.aID);
        let dt = dat.find(a =>a.AssignmentId == req.params.aID);
        res.send(dt);
        next();
    })  
})

// update assignment

childRouter.put('/:aID/update',[express.json()],(req , res , next)=>{
  let AssignmentName = req.body.AssignmentName;
  let AssignmentId = req.body.AssignmentId;
//   console.log(AssignmentName); 
    fs.readFile('assignment.json', 'utf8' , (err , data)=>{
        if(err) throw err;
        
        let dat = JSON.parse(data);
        
        let dt = dat.find(a =>a.AssignmentId == req.params.aID);
        // console.log(dt);
        dt.AssignmentId = AssignmentId;
        dt.AssignmentName =AssignmentName;
        // console.log(dat);
        fs.writeFile('assignment.json', JSON.stringify(dat), (err)=>{
            if(err) throw err;
        })
        res.send('data updated successfully');
        next();
    })  
})

module.exports = childRouter;
