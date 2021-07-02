const mongoose = require("mongoose");
const Joi = require("joi");

// model
const MainCategory = mongoose.model(
  "main-categories",
  new mongoose.Schema({
    mainCategoryName: {
      type: String,
      required: true,
      trim: true,
    },
  })
);

// validating using joi
function validateMainCategory(mainCategory) {
  const schema = {
    mainCategoryName: Joi.string().required(),
  };

  return Joi.validate(mainCategory, schema);
}

module.exports.MainCategory = MainCategory;
module.exports.validateMainCategory = validateMainCategory;
