const express = require('express');

const app = express();

const error = (err , req , res , next) =>{
    console.log(err.stack);
    console.log('error');
    res.status(404).send('somthing want wrong!');
    next();
};

app.use(error);
module.exports = error; 
