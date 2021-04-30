const express = require('express');
const router = express.Router();
const ProductDomain = require('../../domain/product.domain');
const auth = require('../../middleware/auth');
const sellerAuth = require('../../middleware/seller');

class ProductsController{

    // add product
    static async addProduct(req, res){
        const productDomain = new ProductDomain();
        productDomain.addProduct(req, res);
    }

    // get all products
    static async getAllProducts(req, res){
        const productDomain = new ProductDomain();
        productDomain.getAllProducts(req, res);
    }

    // get product by id
    static async getProductById(req, res){
        const productDomain = new ProductDomain();
        productDomain.getProductById(req, res);
    }

    // update product
    static async updateProduct(req, res){
        const productDomain = new ProductDomain();
        productDomain.updateProduct(req, res);
    }

    // delete product
    static async deleteProduct(req, res){
        const productDomain = new ProductDomain();
        productDomain.deleteProduct(req, res);
    }
}

// add product
router.post('/', [ auth, sellerAuth ], ProductsController.addProduct);
// get all products
router.get('/', auth, ProductsController.getAllProducts);
// get product by id
router.get('/:productId', auth, ProductsController.getProductById);
// update product
router.put('/:productId', [ auth, sellerAuth ], ProductsController.updateProduct);
// delete product
router.delete('/:productId', [ auth, sellerAuth ], ProductsController.deleteProduct);

module.exports = router;