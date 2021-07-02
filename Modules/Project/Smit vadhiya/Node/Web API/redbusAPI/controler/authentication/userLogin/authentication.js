var express = require('express');
 global.config = require('../../../static/config')
const Collections = require('../../../models/index')
var router = express.Router();
var jwt = require('jsonwebtoken')
const Encdec = require('../../../domain/passwordDomain');

class UserLogin{
    static async login(req,res){
        const userdata = {
            email : req.body.email,
            password :req.body.password
        }
        const user = await Collections.Users.find({email : userdata.email})
        if(user.length == 0) return res.send("emailId not found")

        var myPassword = Encdec.decPassword(user[0].password)

        const actualData = {
            userEmail : user[0].email,
            userPassword : myPassword
        }
    
        let token = jwt.sign(userdata, global.config.secretKey, {
              algorithm: global.config.algorithm,
              expiresIn: '1h'
              });
        
        if(userdata.email == actualData.userEmail && userdata.password == actualData.userPassword){
            res.status(200).send({
                token : {
                    headers : {
                        token : token
                    }
                },
                id : user[0]._id
            })
        } else {
            res.send("Login faild!! Wrong Password")
        }
    }
}





router.post('/login',UserLogin.login)

module.exports = router;
