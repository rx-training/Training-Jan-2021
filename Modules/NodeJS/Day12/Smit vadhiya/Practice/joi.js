const Joi = require('joi')

const schema = Joi.object({
    Name : Joi.string().min(3).max(7).pattern(/^s.*/)
})

const result = schema.validate({Name : 5})

if(result.error){
    console.log(result.error.details[0].message);
}
else {
   console.log(result.value); result.value
}