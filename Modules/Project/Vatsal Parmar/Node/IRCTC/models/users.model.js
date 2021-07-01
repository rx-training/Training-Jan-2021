const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true, trim: true, uppercase: true },
  last_name: { type: String, required: true, trim: true, uppercase: true },
  password: { type: String, required: true, trim: true },
  mobile: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
});

userSchema.methods.joiValidate = (data) => {
  const Joi = require("joi");
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    mobile: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
  });
  return schema.validate(data);
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
