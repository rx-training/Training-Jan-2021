const { Product, validateProduct } = require('../models/product.model');
const Joi = require('joi');

class ProductDomain {

    // add product
    async addProduct(req, res) {

        const { error } = validateProduct(req.body);

        if (error) {
            return res.send(error.details[0].message);
        }

        try {
            const product = new Product({
                productName: req.body.productName,
                brand: req.body.brand,
                category: req.body.category,
                details: req.body.details,
                price: req.body.price,
                returnable: req.body.returnable,
                pincodes: req.body.pincodes,
                sizes: req.body.sizes,
                imgurls: req.body.imgurls
            });

            await product.save();

            res.send(product);
        }
        catch (e) {
            res.send(e);
        }
    }

    // get all products
    async getAllProducts(req, res) {
        const products = await Product.find().populate('brand', 'brandName').populate('category', 'categoryName');
        res.send(products);
    }

    // get product by id
    async getProductById(req, res) {

        const productId = req.params.productId;

        const { error } = Joi.validate(productId, Joi.objectId().required());

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        const product = await Product.findById(productId).populate('brand', 'brandName').populate('category', 'categoryName');

        if (!product) {
            return res.send("Product not found");
        }

        res.send(product);
    }

    // update product
    async updateProduct(req, res) {

        const productId = req.params.productId;

        var { error } = Joi.validate(productId, Joi.objectId().required());

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        var { error } = validateProduct(req.body);

        if (error) {
            return res.send(error.details[0].message);
        }

        const product = await Product.findById(productId);

        if (!product) {
            res.status(404).send('Product not found');
        }

        try {

            product.set({
                productName: req.body.productName,
                brand: req.body.brand,
                category: req.body.category,
                details: req.body.details,
                price: req.body.price,
                returnable: req.body.returnable,
                pincodes: req.body.pincodes,
                sizes: req.body.sizes,
                imgurls: req.body.imgurls
            });

            await product.save();

            res.send(product);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    // delete product
    async deleteProduct(req, res){

        const productId = req.params.productId;

        var { error } = Joi.validate(productId, Joi.objectId().required());

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        const result = await Product.deleteOne({ _id: productId})

        if(result.deletedCount == 0){
            return res.status(404).send('Product not found');
        }
        else{
            return res.send('Product deleted successfully');
        }
    }
}

module.exports = ProductDomain;