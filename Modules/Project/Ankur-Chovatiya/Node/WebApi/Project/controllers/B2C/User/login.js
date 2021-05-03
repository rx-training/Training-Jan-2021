const express = require('express');
const app = express();
const router = express.Router();
const model = require('../../../MongoDB/model');
const jwt = require('jsonwebtoken');
global.config = require('./config');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const otp = require('../../../domain/otp');

let otps = Math.floor(Math.random() * 1000000);

class AuthenticationRouter{



    static async Login(req , res , next){
        let userdata = {
            username: req.body.username,
            password: req.body.password
            };
        
            
            
            // console.log(userdata.username);
            model.CommonUser.findOne({username:userdata.username}).select().then(result =>{

                if(result.username == userdata.username &&  bcrypt.compare(result.password , userdata.password)){
                    userdata.isAdmin = result.isAdmin;
                    // console.log(userdata);
                    
                  
                    
                    let token = jwt.sign(userdata, global.config.secretKey , {
                        algorithm:global.config.algorithm,
                        expiresIn:'50m'
                    });
                    
                    

                    res.status(200).json({
                        message:'login scuccessful',
                        jwtoken: token
                    });
                    next();
         
                } 
             }).catch(err=>{
                 if(err) throw err;
                 res.status(401).json({
                    message:"Login Faild"
                });
                next();
             })
        
        
    }
    static async sendOtp (req , res ,next ){

        
        // console.log(otp);
        let transporter = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user : 'ankur.chovatiya1856@gmail.com',
                pass : 'anks@1856'
            }
        });

        let mailoption = {
            from : 'ankur.chovatiya1856@gmail.com',
            to : req.body.emailId,
            subject : 'OTP',
            text : `your OTP is ${otps}`
        };
        transporter.sendMail(mailoption ,function(err , info){
            if(err ){
                console.log(err);
            }
            else{
                console.log('Email sent successfully!');
                res.send('otp sent on your emailId please Check!');
                next();
            }
        });
       

        }
    
        static async verifyOtp(req , res , next){
            let userdata = {
                username: req.body.username
                };
     model.CommonUser.findOne({username:userdata.username}).select().then(result =>{
        
            userdata.isAdmin = result.isAdmin;
            if(otps == parseInt(req.body.otp)){
                let token = jwt.sign(userdata, global.config.secretKey , {
                    algorithm:global.config.algorithm,
                    expiresIn:'50m'
                });
                
                

                res.status(200).json({
                    message:'login scuccessful',
                    jwtoken: token
                });
                next();
            } 
        }).catch(err=>{
            if(err) throw err;
            res.status(401).json({
               message:"Login Faild"
           });
           next();
        })
    
        }
    


}


router.post('/sendOtp' , [express.json()], AuthenticationRouter.sendOtp)
router.post('/' , [express.json()] ,AuthenticationRouter.Login);
router.post('/verifyOtp' , [express.json()] , AuthenticationRouter.verifyOtp);


module.exports = router;
