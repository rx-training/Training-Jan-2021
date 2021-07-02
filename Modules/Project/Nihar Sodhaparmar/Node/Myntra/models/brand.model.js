const mongoose = require("mongoose");
const Joi = require("joi");

// model
const Brand = mongoose.model(
  "brands",
  new mongoose.Schema({
    mainCategory: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "main-categories",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "categories",
    },
    brandName: {
      type: String,
      required: true,
      trim: true,
    },
  })
);

// validating using joi
function validateBrand(brand) {
  const schema = {
    mainCategory: Joi.objectId().required(),
    category: Joi.objectId().required(),
    brandName: Joi.string().required(),
  };

  return Joi.validate(brand, schema);
}

module.exports.Brand = Brand;
module.exports.validateBrand = validateBrand;
