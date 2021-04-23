const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  train: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "train",
    required: true,
    trim: true,
  },
  class_type: { type: String, required: true, trim: true, uppercase: true },
  price: { type: Number, required: true, trim: true, min: 0 },
  avail_seat: { type: Number, required: true, trim: true, min: 0 },
  booked_seat: { type: Number, required: true, trim: true, min: 0 },
  wait_seat: { type: Number, required: true, trim: true, min: 0 },
});

statusSchema.methods.joiValidate = (data) => {
  const Joi = require("joi");
  const schema = Joi.object({
    train: Joi.string().required(),
    class_type: Joi.string().required(),
    price: Joi.number().required().min(0),
    avail_seat: Joi.number().required().min(0),
    booked_seat: Joi.number().required().min(0),
    wait_seat: Joi.number().required().min(0),
  });
  return schema.validate(data);
};

const StatusModel = mongoose.model("status", statusSchema);

module.exports = StatusModel;
