const joi  = require("joi");

const schema = joi.object().keys({
    name: joi.string().alphanum().min(3).max(12).required(),
    birthyear : joi.number().integer().min(1980).max(2020),
});

module.exports = schema;