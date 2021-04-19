const express = require('express');
const app = express();
const router = express.Router({mergeParams: true});
const security = require('../../Authentication/jwt')
const fs = require('fs');



const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

class AssignmentRouter{

    static leandingUrl(req , res , next){
        res.send('assignment router is working fine!');
        next();
    }

    static getAllAssignment(req , res , next) {
        // console.log(req.params.id);
        fs.readFile('./assignment.json', 'utf8' , (err , data)=>{
            if(err) throw err;
            let dat = JSON.parse(data);
            // let dt = dat.find(a =>a.AssignmentId == req.params.id);
            res.send(dat);
            next();
        })
    }

    static getOneAssignment(req , res , next){
        let aID = req.params.aid;
        
        // console.log(aID);
        fs.readFile('./assignment.json', 'utf8' , (err , data)=>{
            if(err) throw err;
            let dat = JSON.parse(data);
            // console.log(req.params.id);
            // console.log(req.params.aID);
            let dt = dat.find(a =>a.AssignmentId == aID);
            res.send(dt);
            next();
        })  
    }


    static updateAssignment(req , res , next){
        let aID = req.params.aid;
        console.log(aID);
        console.log(req.body);
        let AssignmentName = req.body.AssignmentName;
        let AssignmentId = req.body.AssignmentId;
//         console.log(AssignmentName); 

            fs.readFile('./assignment.json', 'utf8' , (err , data)=>{
                if(err) throw err;
                
                let dat = JSON.parse(data);
                
                let dt = dat.find(a =>a.AssignmentId == aID);
                // console.log(dt);
                dt.AssignmentId = AssignmentId;
                dt.AssignmentName =AssignmentName;
                // console.log(dat);
                fs.writeFile('./assignment.json', JSON.stringify(dat), (err)=>{
                    if(err) throw err;
                })
                res.send('data updated successfully');
                next();
            })  
    }

}

router.get('/' , [security],AssignmentRouter.leandingUrl);
router.get('/all' ,[security], AssignmentRouter.getAllAssignment);
router.get('/:aid', [security],AssignmentRouter.getOneAssignment);
router.put('/:aid' ,[express.json(),security], AssignmentRouter.updateAssignment);


module.exports = router;