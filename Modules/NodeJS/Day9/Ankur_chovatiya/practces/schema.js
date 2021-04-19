const Joi = require("joi");





const schema =({

   Birth:Joi.object().keys({
                name :Joi.string().min(2).max(8).required(),
                year :Joi.number().integer().min(1900).max(2500)
            }),

    login:Joi.object().keys({
        name:Joi.string(),
       password:Joi.string()
    })
    
   
})
// console.log(schema.Birth);
// Login:{
            
//     username:Joi.string().min(3).max(8).required(),
//     password:Joi.number().integer().min(2000).max(5000).required()
// }    

module.exports = schema;