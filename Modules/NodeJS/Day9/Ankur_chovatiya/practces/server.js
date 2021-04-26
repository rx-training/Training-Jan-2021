const express = require('express');
const Joi = require('joi');
const app = express();
const validApp = require('./joimiddleware');
const donSchema = require('./schema');

// console.log(Schema.Birth);
// const validator  = require('express-joi-validation').createValidator({});

app.get('/', (req , res)=>{
    res.send('server is working fine!');
});

app.post('/birthday' ,[express.json(),validApp(donSchema.Birth)],(req , res)=>{
    console.log(req.body);
    res.send('Happy birthday');
});

app.put('/login' , [express.json(),validApp(donSchema.login)], (req , res)=>{
    res.send("success!")
})

// app.post('/login', [express.json(),validApp(Schema.login)],(req , res)=>{
     
//     res.send('login !!!!');
// })


app.listen(5000 , ()=>{
    console.log('Server is running on port 5000 ......');
})