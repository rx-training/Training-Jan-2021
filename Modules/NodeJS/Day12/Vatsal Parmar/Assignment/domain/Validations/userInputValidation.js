const Joi = require("joi");

const EmpSchema = Joi.object({
  _id: Joi.number().required(),
  FirstName: Joi.string().required(),
  LastName: Joi.string().required(),
  Assignments: Joi.array(),
});

const StudentSchema = Joi.object({
  _id: Joi.number().required(),
  Name: Joi.string().required(),
  Address: Joi.string().required(),
  Fees: Joi.array(),
  Result: Joi.array(),
});

module.exports = { EmpSchema, StudentSchema };
