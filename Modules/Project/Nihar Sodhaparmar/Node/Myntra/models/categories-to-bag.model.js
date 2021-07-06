const mongoose = require("mongoose");
const Joi = require("joi");

// model
const CategoryToBag = mongoose.model(
  "categories-to-bags",
  new mongoose.Schema({
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "categories",
    },
    imgurl: {
      type: String,
      required: true,
    },
  })
);

// validating using joi
function validateCategoryToBag(categoryToBag) {
  const schema = {
    category: Joi.objectId().required(),
  };

  return Joi.validate(categoryToBag, schema);
}

module.exports.CategoryToBag = CategoryToBag;
module.exports.validateCategoryToBag = validateCategoryToBag;
