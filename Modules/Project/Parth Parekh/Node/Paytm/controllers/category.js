const express = require("express");
const router = express.Router({ mergeParams: true });
const CategoryModel = require("../models/category");
const adminverifytoken = require("../middleware/adminverifytoken");

class CategoryController {
    static async getCategory(req, res) {
        try {
            const data = await CategoryModel.find();
            res.status(200).send(data);
        } catch (e) {
            res.status(400).send("not found");
        }
    }

    static async getCategoryFromId(req, res) {
        try {
            const data = await CategoryModel.findById(req.params.uid);
            res.status(200).send(data);
        } catch (e) {
            res.status(400).send("Error");
        }
    }

    static async addCategory(req, res) {
        const data = req.body;
        const categoryObject = new CategoryModel(data);
        try {
            const result = await categoryObject.save();
            res.send(result);
        } catch (ex) {
            res.send(ex.message);
        }
    }
    static async updateCategory(req, res) {
        const data = req.body;
        try {
            const result = await CategoryModel.findByIdAndUpdate(
                req.params.uid,
                {
                    $set: data,
                },
                { new: true }
            );
            return res.status(200).send(result);
        } catch (ex) {
            return res.status(400).send(ex.message);
        }
    }
    static async deleteCategory(req, res) {
        const result = await CategoryModel.findByIdAndDelete(req.params.did);
        if (!result) {
            return res.status(404).send("Cateogry Not Found");
        } else {
            res.send(`Category Id :${req.params.id}  Deleted Successfully `);
        }
    }
}

//get category
router.get("/", [adminverifytoken], CategoryController.getCategory);
router.get("/:uid", [adminverifytoken], CategoryController.getCategoryFromId);

//Add Cateogry
router.post("/", [adminverifytoken], CategoryController.addCategory);

//Update
router.put("/:uid", [adminverifytoken], CategoryController.updateCategory);

// Delete Category
router.delete("/:did", [adminverifytoken], CategoryController.deleteCategory);

module.exports = router;
