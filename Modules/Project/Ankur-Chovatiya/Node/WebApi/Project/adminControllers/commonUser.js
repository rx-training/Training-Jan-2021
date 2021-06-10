const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const router = express.Router();
const model = require('../MongoDB/model');
const otp = require('../domain/otp');
// const { result } = require('lodash');

class CommonUser {


    static async getUser(req , res , next){
        model.CommonUser.findOne(req.body).then(result => {
            console.log('login successfull');
            res.send(result);
        }).catch(err =>{
            console.log(err);
        })
    }

    static async addUser(req , res , next) {
        let user = new model.CommonUser(req.body);

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(user.password , salt);
        
        user.password = hashed;
        // console.log(user.password);
        // send otp mail

        // let otps =await otp.GenerateOtp(user.emailId);
        // console.log(otps);

        user.save().then(result =>{
            res.send("data saved successfully!");
            next();
        }).catch(err =>{
            if(err) throw err;
            res.send("unable to save data!");
            next();
        })
    }
    static async deleteUser(req , res , next) {
        let username = req.params.username;
        model.Address.deleteOne({username:username})
        .then(result =>{
            res.send("data deleted successfully!");
            next();
        }).catch(err =>{
            res.send("unable to delete data!");
            next();
        })
    }



}
router.post('/user' , [express.json()] , CommonUser.getUser);
router.post('/addUser' ,[express.json()] ,CommonUser.addUser);
router.delete('/:username/delete' , [express.json()] , CommonUser.deleteUser);
module.exports = router;



