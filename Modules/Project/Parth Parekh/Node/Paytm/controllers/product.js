const express = require('express');
const router = express.Router();
const ProductData = require('../domain/productlogic');
const adminverifytoken = require("./../middleware/adminverifytoken");
const verifytoken = require("./../middleware/verifytoken");

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
    static async bookOrder(req,res){
        const productData = new ProductData();
        productData.bookOrder(req, res);
    }
}

//Get Methods
router.get('/' , [verifytoken]  ,ProductController.getProduct);
router.get("/:id", [verifytoken], ProductController.getProductDetailsFromId);

//Post Methods
//For Insert  a New Product  ,  Pass in body : ProductName,ProductCategory,ProductType, ProductPrice,Qty
router.post('/' , [adminverifytoken] ,ProductController.addProduct);

//To Book Order Pass , userId , ProductName ,Quantity , ShippingAddress in Body
router.post("/bookorder", [verifytoken], ProductController.bookOrder);

//Put Methods
//To Update ProductDetails
router.put("/:id", [adminverifytoken], ProductController.updateProductDetails);

//Delete Methods
router.delete("/:id", [adminverifytoken], ProductController.deleteProduct);

module.exports = router;