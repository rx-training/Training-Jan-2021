const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  train_name: { type: String, required: true, trim: true, uppercase: true },
  train_type: {
    type: String,
    required: true,
    enum: ["SPECIAL", "RAGULAR", "EXPRESS", "SHATABDI"],
    uppercase: true,
    trim: true,
  },
  date: { type: Date, required: true },
  days: { type: String, required: true, trim: true, uppercase: true },
});

trainSchema.methods.joiValidate = (data) => {
  const Joi = require("joi");
  const schema = Joi.object({
    train_name: Joi.string().required(),
    train_type: Joi.string().required(),
    date: Joi.date().required(),
    days: Joi.string().required(),
  });
  return schema.validate(data);
};

const TrainModel = mongoose.model("train", trainSchema);

module.exports = TrainModel;
