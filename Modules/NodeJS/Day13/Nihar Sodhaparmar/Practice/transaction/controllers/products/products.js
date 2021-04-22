const express = require('express');
const router = express();
const ProductDomain = require('../../domain/product.domain');

class ProductsController{

    // add product
    static async addProduct(req, res){
        const productDomain = new ProductDomain();
        productDomain.addProduct(req, res);
    }

    // get products
    static async getProducts(req, res){
        const productDomain = new ProductDomain();
        productDomain.getProducts(req, res);
    }
}

// get products
router.get('/', ProductsController.getProducts);

// add product
router.post('/', ProductsController.addProduct);

module.exports = router;