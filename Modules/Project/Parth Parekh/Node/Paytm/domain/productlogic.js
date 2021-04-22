const ProductModel = require("../models/product");

class ProductData {

    async getProduct(req,res){
        try{
            const result = await ProductModel.find();
            if (!result) {
                return res.status(404).send("No Products Available !!");
            }
            else{
            res.send(result); }
        }
        catch(ex){
            res.send(ex.message);
        }
    }

    async getProductDetailsFromId(req,res){
        try {
            const result = await ProductModel.findById(req.params.id);
            if (!result) {
                return res.status(404).send("Product Not Available !!");
            } else {
                res.send(result);
            }
        } catch (ex) {
            res.send(ex.message);
        }
    }

    async addProduct(req, res) {
        const data = req.body;
        const productObject = new ProductModel(data);
        const { error, value } = productObject.joivalidate(data);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        try {
            const result = await productObject.save();
            res.send(result);
        } catch (ex) {
            res.send(ex.message);
        }
    }
    async deleteProduct(req, res) {
        const result = await ProductModel.findByIdAndDelete(req.params.id);
        if(!result) { return res.status(404).send('Product Not Found'); }
        else{
        res.send(`Product Id:${req.params.id}  Deleted Successfully `);
        }
    }
    async updateProductDetails(req, res) {
        const data = req.body;
        const productObject = new ProductModel(data);
        const { error, value } = productObject.joivalidate(data);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        try {
            const result = await ProductModel.findByIdAndUpdate(
                req.params.id,
                {
                    $set: data,
                },
                { new: true }
            );
            res.send(result);
        } catch (ex) {
            res.send(ex.message);
        }
    }
}

module.exports = ProductData;
