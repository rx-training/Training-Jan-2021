const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  train_name: { type: String, required: true, trim: true, uppercase: true },
  train_type: {
    type: String,
    required: true,
    enum: ["SPECIAL", "REGULAR", "EXPRESS", "SHATABDI"],
    uppercase: true,
    trim: true,
  },
  date: { type: Date, required: true },
  days: {
    type: Array,
    trim: true,
    default: ["Sn", "M", "T", "W", "Th", "F", "S"],
  },
});

trainSchema.methods.joiValidate = (data) => {
  const Joi = require("joi");
  const schema = Joi.object({
    train_name: Joi.string().required(),
    train_type: Joi.string().required(),
    date: Joi.string().required(),
    days: Joi.array(),
  });
  return schema.validate(data);
};

const TrainModel = mongoose.model("train", trainSchema);

module.exports = TrainModel;
