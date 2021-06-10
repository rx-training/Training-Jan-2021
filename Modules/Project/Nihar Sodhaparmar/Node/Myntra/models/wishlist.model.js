const mongoose = require("mongoose");
const Joi = require("joi");

// model
const Wishlist = mongoose.model(
  "wishlists",
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
  })
);

// validating using joi
function validateWishlist(wishlist) {
  const schema = {
    customer: Joi.objectId().required(),
    product: Joi.objectId().required(),
  };

  return Joi.validate(wishlist, schema);
}

module.exports.Wishlist = Wishlist;
module.exports.validateWishlist = validateWishlist;
