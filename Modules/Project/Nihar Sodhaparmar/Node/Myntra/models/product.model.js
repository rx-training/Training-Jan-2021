const mongoose = require("mongoose");
const Joi = require("joi");

//model
const Product = mongoose.model(
  "products",
  new mongoose.Schema({
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "brands",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "categories",
    },
    mainCategory: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "main-categories",
    },
    details: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    offer: {
      type: Number,
      default: 0,
    },
    returnable: {
      type: Boolean,
      required: true,
    },
    pincodes: {
      type: [
        {
          type: Number,
          minlength: 6,
          maxlength: 10,
        },
      ],
      validate: {
        validator: function (v) {
          return v && v.length > 0;
        },
        message: "Product should has atleast one pincode",
      },
    },
    sizes: {
      type: [
        {
          type: String,
        },
      ],
      validate: {
        validator: function (v) {
          return v && v.length > 0;
        },
        message: "Product should has atleast one size",
      },
    },
    imgurls: {
      type: [
        {
          type: String,
        },
      ],
      // validate: {
      //   validator: function (v) {
      //     return v && v.length > 3;
      //   },
      //   message: "Product should has atleast four image urls",
      // },
    },
  })
);

// validating using joi
function validateProduct(product) {
  const schema = {
    productName: Joi.string().required(),
    brand: Joi.objectId().required(),
    category: Joi.objectId().required(),
    mainCategory: Joi.objectId().required(),
    details: Joi.string().required(),
    price: Joi.number().required(),
    offer: Joi.number(),
    returnable: Joi.boolean().required(),
    pincodes: Joi.array().items(Joi.number().required()).required(),
    sizes: Joi.array().items(Joi.string().required()).required(),
  };

  return Joi.validate(product, schema);
}

module.exports.Product = Product;
module.exports.validateProduct = validateProduct;
