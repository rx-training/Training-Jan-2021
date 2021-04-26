const Joi = require('joi');
const joi = require('joi');



const joiMiddleware = (schema , proparty)=>{

   
    return (req , res , next)=>{
        console.log(req.body);
        const {error , value} = schema.validate(req.body , schema);
        console.log(error);
        const valid = error == null;
        console.log(valid);
        if(valid){
            next();
        }
        else{
           res.send('your input is not valid');
        }
    }
}

module.exports = joiMiddleware;





// const dataTovalidate = {
//     name:'anks',
//     birthyear:1999
// }

// const result = joi.validate(dataTovalidate , schema);


// result.error == null means valid