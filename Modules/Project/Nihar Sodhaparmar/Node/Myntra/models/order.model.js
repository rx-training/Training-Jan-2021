const mongoose = require("mongoose");
const Joi = require("joi");

// model
const Order = mongoose.model(
  "orders",
  new mongoose.Schema({
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "customers",
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
    products: {
      type: [
        new mongoose.Schema({
          product: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "products",
          },
          size: {
            type: String,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
            min: 1,
          },
          salePrice: {
            type: Number,
            required: true,
          },
        }),
      ],
      validate: {
        validator: function (v) {
          return v && v.length > 0;
        },
        message: "Order should has atleast one product",
      },
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
  })
);

// validating using joi
function validateOrder(order) {
  const schema = {
    customer: Joi.objectId().required(),
    products: Joi.array()
      .items(
        Joi.object()
          .keys({
            product: Joi.objectId().required(),
            size: Joi.string().required(),
            quantity: Joi.number().min(1).required(),
          })
          .required()
      )
      .required(),
  };

  return Joi.validate(order, schema);
}

module.exports.Order = Order;
module.exports.validateOrder = validateOrder;
