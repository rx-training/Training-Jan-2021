const express = require('express');


const LoggerMiddleware = (req , res , next)=>{
    console.log(`${req.url}  ${req.method} and ${new Date()}`);
    next();
}

const app = express();

app.use(LoggerMiddleware);



module.exports = LoggerMiddleware ;