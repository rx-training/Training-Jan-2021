const express = require('express');
const router = express.Router();
const ProductData = require('../domain/productlogic');

class ProductController {
    static async getProduct(req, res) {
        const productData = new ProductData();
        productData.getProduct(req, res);
    }
    static async getProductDetailsFromId(req,res){
        const productData = new ProductData();
        productData.getProductDetailsFromId(req, res);
    }
    static async addProduct(req, res) {
        const productData = new ProductData();
        productData.addProduct(req, res);
    }
    static async deleteProduct(req, res) {
        const productData = new ProductData();
        productData.deleteProduct(req, res);
    }
    static async updateProductDetails(req, res) {
        const productData = new ProductData();
        productData.updateProductDetails(req, res);
    }
}

//Get Methods
router.get('/',ProductController.getProduct);
router.get("/:id", ProductController.getProductDetailsFromId);

//Post Methods
router.post('/',ProductController.addProduct);

//Put Methods
router.put("/:id", ProductController.updateProductDetails);

//Delete Methods
router.delete('/:id',ProductController.deleteProduct);

module.exports = router;