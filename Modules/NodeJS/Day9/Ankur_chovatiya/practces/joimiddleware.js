const Joi = require('joi');
const express = require('express');
const app = express();
const birthSchema = require('./schema');
// const loginSchema = require('./schema');

const don = (schema , property ) =>{

    console.log(schema);
return app.use((req , res , next)=>{
    console.log(req.body);

    const { error }  = schema.validate(req.body);
   
    console.log(error);
      let valid = error == undefined;
      if(valid){
          next();
      }    
      else { 
        const { details } = error; 
        const message = details.map(i => i.message).join(',');
     
        console.log("error", message); 
       res.status(422).json({ error: message }) } 
     
  
  
  });
}



module.exports = don;


