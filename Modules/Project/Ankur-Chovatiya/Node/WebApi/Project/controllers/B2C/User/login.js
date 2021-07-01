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
            console.log(userdata);

        
            
            
            // console.log(userdata.username);
            model.CommonUser.findOne({username:userdata.username}).select().then(result =>{

                    // console.log(result);
                    // console.log(bcrypt.compareSync(userdata.password , result.password));
                if(result != null &&   result?.username == userdata.username && bcrypt.compareSync(userdata.password , result?.password)){  
                        console.log('hello');

                        userdata.isAdmin = result?.isAdmin;
                         
                        let token = jwt.sign(userdata, global.config.secretKey , {
                            algorithm:global.config.algorithm,
                            expiresIn:'50m'
                        });
                        
                        
                        console.log('login successfull');
                        res.status(200).json({
                            
                            message:'login scuccessful',
                            jwtoken: token
                        });
                        next();
                    }

                 else {
                    res.status(404).json({
                        message:"invalid password or username"
                    });
                 }   
             }).catch(err=>{
                if(err) throw err;
                res.status(404).json({
                   message:"no user"
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
    

        static async verifyToken(req , res ,next){
            
            const token = req.body.token || req.body.query ;
            const userData = req.body.userData ;

            if(!token) {
                return res.status(400).json({
                    error : true ,
                    message : "Token is required"
                })
            }

            jwt.verify(token, global.config.secretKey,
                { algorithm: global.config.algorithm},
            (err, user) =>{
                    if (err) {
                            let errordata = {
                                    message: err.message,
                                    expiredAt: err.expiredAt
                                    };
                            console.log(errordata);
                            return res.status(401).json({
                            message: 'Unauthorized Access'});
                            }

                    if(user.username !== userData.username)
                            return res.status(401).json({
                                error : true ,
                                messages : "Invalid user"
                            })

                            
                }
            ); 
            

        }

}


router.post('/sendOtp' , [express.json()], AuthenticationRouter.sendOtp)
router.post('/' , [express.json()] ,AuthenticationRouter.Login);
router.post('/verifyToken' , [express.json()] , AuthenticationRouter.verifyToken)
router.post('/verifyOtp' , [express.json()] , AuthenticationRouter.verifyOtp);


module.exports = router;
