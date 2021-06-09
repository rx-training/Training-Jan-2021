const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    ProductName: { type: String, required: true, trim: true },
    ProductCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
    },
    Rating: { type: Number, requied: true, trim: true },
    image: { type: String },
    featured: { type: Boolean, default: false },
    ProductType: { type: String },
    moreInfo: { type: Array },
    Spec: { type: String },
    ProductPrice: { type: Number, required: true },
    Qty: { type: Number, required: true },
});

productSchema.methods.joivalidate = (data) => {
    const Joi = require("joi");
    const schema = Joi.object({
        ProductName: Joi.string().required(),
        ProductCategory: Joi.string().required(),
        image: Joi.string(),
        ProductType: Joi.string().required(),
        ProductPrice: Joi.number().required(),
        Qty: Joi.number().required(),
        featured: Joi.boolean(),
        Spec: Joi.string(),
        Rating: Joi.number(),
        moreInfo: Joi.array(),
    });
    return schema.validate(data);
};

const ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;
