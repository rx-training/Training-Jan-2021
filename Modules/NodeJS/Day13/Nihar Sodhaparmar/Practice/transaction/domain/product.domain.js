const { Product, validate} = require('../model/product.model');

class ProductDomain{

    // add product
    async addProduct(req, res){
        const { error } = validate(req.body);

        if(error){
            return res.status(404).send(error.details[0].message);
        }

        const product = new Product({
            name: req.body.name,
            price: req.body.price,
            numberInStock: req.body.numberInStock
        });

        await product.save();

        res.send(product);
    }

    // get products
    async getProducts(req, res){
        const products = await Product.find().select({ name: 1, price: 1, numberInStock: 1});
        res.send(products);
    }
}

module.exports = ProductDomain;