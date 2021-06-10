const mongoose = require("mongoose");
const Joi = require("joi");

// model
const SubCategory = mongoose.model(
  "sub-categories",
  new mongoose.Schema({
    subCategoryName: {
      type: String,
      required: true,
      trim: true,
    },
  })
);

// validating using joi
function validateSubCategory(subCcategory) {
  const schema = {
    subCategoryName: Joi.string().required(),
  };

  return Joi.validate(subCcategory, schema);
}

module.exports.SubCategory = SubCategory;
module.exports.validateSubCategory = validateSubCategory;
