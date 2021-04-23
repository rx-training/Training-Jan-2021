const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  amount: { type: Number, required: true, trim: true },
  payment_type: {
    type: String,
    required: true,
    enum: ["UPI", "NET BANKING", "DEBIT CARD", "CREDIT CARD"],
    uppercase: true,
    trim: true,
  },
  payment_status: {
    type: String,
    required: true,
    enum: ["SUCCESS", "FAILED", "PANDING"],
    uppercase: true,
    trim: true,
  },
  date: { type: Date, required: true, default: Date.now },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true,
    ref: "user",
  },
  train: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true,
    ref: "train",
  },
});

paymentSchema.methods.joiValidate = (data) => {
  const Joi = require("joi");
  const schema = Joi.object({
    amount: Joi.number().required(),
    payment_type: Joi.string().required(),
    payment_status: Joi.string().required(),
    date: Joi.date(),
    user: Joi.string().required(),
    train: Joi.string().required(),
  });
  return schema.validate(data);
};

const PaymentModel = mongoose.model("payment", paymentSchema);

module.exports = PaymentModel;
