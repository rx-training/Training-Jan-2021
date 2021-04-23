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
  train: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "train",
    required: true,
    trim: true,
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "station",
    required: true,
    trim: true,
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "station",
    required: true,
    trim: true,
  },
  travel_class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "status",
    orequired: true,
    trim: true,
  },
  seat_no: { type: String, trim: true, uppercase: true },
  booking_date: { type: Date, trim: true },
  ticket_price: { type: Number, trim: true, required: true, min: 0 },
});

passengerSchema.methods.joiValidate = (data) => {
  const Joi = require("joi");
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    age: Joi.number().required().min(0).max(200),
    gender: Joi.string().required(),
    reservation_status: Joi.string().required(),
    train: Joi.string().required(),
    from: Joi.string().required(),
    to: Joi.string().required(),
    seat_no: Joi.string(),
    booking_date: Joi.date(),
    travel_class: Joi.string().required(),
    ticket_price: Joi.number().required(),
  });
  return schema.validate(data);
};

const PassengerModel = mongoose.model("passenger", passengerSchema);

module.exports = PassengerModel;
