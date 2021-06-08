const mongoose = require("mongoose");

const passengerSchema = new mongoose.Schema({
  first_name: { type: String, required: true, trim: true, uppercase: true },
  last_name: { type: String, required: true, trim: true, uppercase: true },
  age: { type: Number, required: true, trim: true, min: 0, max: 200 },
  gender: {
    type: String,
    required: true,
    trim: true,
    enum: ["MALE", "FEMALE", "OTHER"],
    uppercase: true,
  },
  reservation_status: {
    type: String,
    required: true,
    trim: true,
    enum: ["WAITING", "BOOKED", "CANCLED"],
    uppercase: true,
  },
  seat_no: { type: String, trim: true, uppercase: true, default: 0 },
  seat_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true,
  },
});

const pnrSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
    trim: true,
  },
  train: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "train",
    required: true,
    trim: true,
  },
  passengers: {
    type: [passengerSchema],
    required: true,
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "station",
    required: true,
    trim: true,
  },
  fromTime: {
    type: String,
    trim: true,
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "station",
    required: true,
    trim: true,
  },
  toTime: {
    type: String,
    trim: true,
  },
  travel_class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "status",
    orequired: true,
    trim: true,
  },
  journey_date: { type: String, trim: true },
  ticket_price: { type: Number, trim: true, required: true, min: 0 },
});

pnrSchema.methods.joiValidate = (data) => {
  const Joi = require("joi");
  const schema = Joi.object({
    user_id: Joi.string().required(),
    train: Joi.string().required(),
    passengers: Joi.array().required(),
    from: Joi.string().required(),
    to: Joi.string().required(),
    fromTime: Joi.string(),
    toTime: Joi.string(),
    journey_date: Joi.string(),
    travel_class: Joi.string().required(),
    ticket_price: Joi.number().required(),
  });
  return schema.validate(data);
};

const PnrModel = mongoose.model("pnr", pnrSchema);

module.exports = PnrModel;
