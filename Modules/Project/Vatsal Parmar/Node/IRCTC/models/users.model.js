const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_name: { type: String, required: true, trim: true, uppercase: true },
  password: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
});

userSchema.methods.joiValidate = (data) => {
  const Joi = require("joi");
  const schema = Joi.object({
    user_name: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
  });
  return schema.validate(data);
};

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
