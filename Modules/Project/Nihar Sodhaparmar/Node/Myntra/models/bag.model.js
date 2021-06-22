const mongoose = require("mongoose");
const Joi = require("joi");

// model
const Bag = mongoose.model(
  "bags",
  new mongoose.Schema({
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "customers",
    },
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
    },
  })
);

// validating using joi
function validateBag(bag) {
  const schema = {
    customer: Joi.objectId().required(),
    product: Joi.objectId().required(),
    size: Joi.string().required(),
    quantity: Joi.number().required(),
  };

  return Joi.validate(bag, schema);
}

module.exports.Bag = Bag;
module.exports.validateBag = validateBag;
