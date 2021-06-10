const mongoose = require("mongoose");
const Joi = require("joi");

// model
const Customer = mongoose.model(
  "customers",
  new mongoose.Schema({
    customerName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
    },
    contactNumber: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 15,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      uppercase: true,
    },
    password: {
      type: String,
      required: true,
      maxlength: 1024,
    },
    address: {
      type: new mongoose.Schema({
        addressLine1: {
          type: String,
          required: true,
        },
        addressLine2: {
          type: String,
        },
        pincode: {
          type: String,
          required: true,
          minlength: 6,
          maxlength: 10,
        },
        city: {
          type: String,
          required: true,
        },
        state: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
      }),
      required: true,
    },
  })
);

// validating using joi
function validateCustomer(customer) {
  const schema = {
    customerName: Joi.string().required(),
    email: Joi.string()
      .regex(new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
      .required(),
    contactNumber: Joi.string().min(10).required(),
    dob: Joi.date().required(),
    gender: Joi.string().required(),
    password: Joi.string()
      .regex(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
        )
      )
      .required(),
    address: Joi.object()
      .keys({
        addressLine1: Joi.string().required(),
        addressLine2: Joi.string(),
        pincode: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        country: Joi.string().required(),
      })
      .required(),
  };

  return Joi.validate(customer, schema);
}

module.exports.Customer = Customer;
module.exports.validateCustomer = validateCustomer;
