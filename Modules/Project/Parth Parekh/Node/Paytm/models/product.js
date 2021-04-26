const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    
    ProductName: { type: String, required: true, trim: true },
    ProductCategory :{ type: String, required: true, trim: true },
    ProductType: { type: String, required: true, trim: true },
    ProductPrice: { type: Number, required: true },
    Qty : { type: Number, required: true }
});

productSchema.methods.joivalidate = (data) => {
    const Joi = require("joi");
    const schema = Joi.object({
        ProductName: Joi.string().required(),
        ProductCategory: Joi.string().required(),
        ProductType: Joi.string().required(),
        ProductPrice: Joi.number().required(),
        Qty: Joi.number().required()
    });
    return schema.validate(data);
};

const ProductModel = mongoose.model("product", productSchema);
module.exports = ProductModel;