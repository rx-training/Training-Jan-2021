const express = require("express");
const router = express.Router({mergeParams : true});
const CategoryModel = require('../models/category');
const adminverifytoken = require('../middleware/adminverifytoken');

class CategoryController{
    static async addCategory(req,res){
        const data = req.body;
        const categoryObject =  new CategoryModel(data);
        try {
            const result = await categoryObject.save();
            res.send(result);
        } catch (ex) {
            res.send(ex.message);
        }

    }
    static async deleteCategory(req,res){
        const result = await CategoryModel.findByIdAndDelete(req.params.did);
        if (!result) {
            return res.status(404).send("Cateogry Not Found");
        } else {
            res.send(`Category Id :${req.params.id}  Deleted Successfully `);
        }
    }
}

//Add Cateogry
router.post('/add' , [adminverifytoken] ,CategoryController.addCategory);

//Delete Category
router.delete("/delete/:did",[adminverifytoken], CategoryController.deleteCategory);

module.exports = router;