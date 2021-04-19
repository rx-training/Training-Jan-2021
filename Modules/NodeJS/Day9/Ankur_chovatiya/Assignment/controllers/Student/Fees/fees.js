const express = require('express');
const router = express.Router({mergeParams:true});
const fs = require('fs');
const app = express();
app.use(express.json());
const security = require('../../Authentication/jwt');

class ResultRouter {

    static leandingUrl(req , res , next){
        let id  = req.params.id;
        fs.readFile('./students.json' , 'utf8' , (err , data)=>{
            if(err) throw err;
            let dat = JSON.parse(data);
            let student = dat.find(s => s.ID == id );
            let fees = student.Fees;
            res.json(fees);
            next();
        })
    }

}


router.get('/' , [security],ResultRouter.leandingUrl);



module.exports = router;