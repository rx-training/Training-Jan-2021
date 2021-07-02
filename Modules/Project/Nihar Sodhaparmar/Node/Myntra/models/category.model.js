const mongoose = require("mongoose");
const Joi = require("joi");

// model
const Category = mongoose.model(
  "categories",
  new mongoose.Schema({
    mainCategory: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      trim: true,
      ref: "main-categories",
    },
    categoryName: {
      type: String,
      required: true,
      trim: true,
    },
    inCategoriesToBag: {
      type: Boolean,
      required: true,
    },
  })
);

// validating using joi
function validateCategory(category) {
  const schema = {
    mainCategory: Joi.objectId().required(),
    categoryName: Joi.string().required(),
    inCategoriesToBag: Joi.boolean().required(),
  };

  return Joi.validate(category, schema);
}

module.exports.Category = Category;
module.exports.validateCategory = validateCategory;
