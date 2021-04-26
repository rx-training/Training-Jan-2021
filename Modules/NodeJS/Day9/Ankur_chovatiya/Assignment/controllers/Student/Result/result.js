const express = require('express');
const router = express.Router({mergeParams:true});
const fs = require('fs');
const security = require('../../Authentication/jwt');

class ResultRouter{

    static leandingUrl(req , res , next){
        let id = req.params.id;
        fs.readFile('./students.json' , 'utf8' , (err , data)=>{
            if(err) throw err;
            let dat = JSON.parse(data);
            let student = dat.find(s => s.ID == id );
            let result = student.Result;
            res.json(result);
            next();
        })
    }

    static updateMarks(req , res , next){
        var id = req.params.id;

            fs.readFile('./students.json' , 'utf8' , (err , data)=>{
                let dat = JSON.parse(data);
                let student = dat.find(s => s.ID == id );
                // console.log(student);
            // console.log(req.body);
            student.Result.Eng = req.body.Eng;


                fs.writeFile('./students.json' ,JSON.stringify(dat) , (err)=>{
                    if(err) throw err;
                })
                res.send('Recored sucessfully Updated!')
            });
    }

}



router.get('/' ,[security],ResultRouter.leandingUrl);
router.put('/update' , [express.json(),security],ResultRouter.updateMarks);



module.exports = router;