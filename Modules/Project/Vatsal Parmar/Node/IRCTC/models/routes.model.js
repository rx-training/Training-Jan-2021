const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema({
  train: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "train",
    required: true,
    trim: true,
  },
  arr_time: { type: String, required: true, trim: true },
  depart_time: { type: String, required: true, trim: true },
  station: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "station",
    required: true,
    trim: true,
  },
  stop_no: { type: Number, required: true, trim: true },
});

routeSchema.methods.joiValidate = (data) => {
  const Joi = require("joi");
  const schema = Joi.object({
    train: Joi.string().required(),
    arr_time: Joi.string().required(),
    depart_time: Joi.string().required(),
    station: Joi.string().required(),
    stop_no: Joi.number().required(),
  });
  return schema.validate(data);
};

const RouteModel = mongoose.model("route", routeSchema);

module.exports = RouteModel;
