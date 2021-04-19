const express = require('express');
const userRouter = require('./user/user');
const customerRouter = require('./customer/customer');
const app = express();
global.config = require('./config');

app.get('/' , (req , res)=>{

    res.send('server is working fine.');
})

app.use('/user' , userRouter);
app.use('/customer' , customerRouter);

app.listen(5000 , ()=>{
    console.log('server is runing on port 5000.....');
})