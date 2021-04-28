const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../../MongoDB/model');
const security = require('../../../Middelware/jwt');
const admin = require('../../../Middelware/isAdmin');

// console.log(admin);
class User {

    static async addUser(req , res , next) {
        const user = new model.User(req.body);
        user.save().then(result =>{
            res.send("your are successfully register");
            next();
        }).catch(err =>{
            if(err) throw err;
            re.send("unable to register please try again!")
        });
    }

    static async deleteuser(req , res , next){
        model.User.deleteOne(req.params.id).then(result =>{
            res.send("data deleted successfully!");
            next();
        }).catch(err =>{
            res.send("unable to delete data!");
            next();
        })
    }    


}

// router.get('/' , [security ,admin],(req , res , next)=>{res.send('res demo')});
router.post('/add' ,[express.json() , security , admin]  ,User.addUser);
router.delete('/:id/delete' , [express.json(),security , admin] , User.deleteuser);
module.exports = router;



