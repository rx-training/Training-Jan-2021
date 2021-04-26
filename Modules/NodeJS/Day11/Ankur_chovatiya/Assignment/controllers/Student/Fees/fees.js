const express = require('express');
const router = express.Router({mergeParams:true});
const fs = require('fs');
const app = express();
app.use(express.json());
const security = require('../../Authentication/jwt');
const model = require('../../../mongoDB/Model');

class ResultRouter {

    static leandingUrl(req , res , next){
        let id  = req.params.id;
         model.Student.find({ID:id}).exec((err , result)=>{
            let fees = result.Fees;
            console.log(typeof(result));
            res.send(result);
            next();
         });
       
       
        
    }

}


router.get('/' , [express.json()],ResultRouter.leandingUrl);



module.exports = router;