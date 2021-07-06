const Joi = require("joi");
const {
  CategoryToBag,
  validateCategoryToBag,
} = require("../models/categories-to-bag.model");
const { Category } = require("../models/category.model");
const mongoose = require("mongoose");
var Fawn = require("fawn");
Fawn.init(mongoose, "OJLINTTASKCOLLECTION2");

class CategoryToBagDomain {
  // add cateory to bag
  async addCategoryToBag(req, res) {
    const { error } = validateCategoryToBag(req.body);

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const imgurl = req.file;

    try {
      const categoryToBag = new CategoryToBag({
        category: req.body.category,
        imgurl: imgurl.path,
      });

      await new Fawn.Task()
        .save(CategoryToBag, categoryToBag)
        .update(
          "categories",
          { _id: mongoose.Types.ObjectId(req.body.category) },
          { inCategoriesToBag: true }
        )
        .run();

      // await categoryToBag.save();

      res.send(categoryToBag);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }

  // get all categories to bag
  async getAllCategoriesToBag(req, res) {
    const categoriesToBag = await CategoryToBag.find().populate("category");
    res.send(categoriesToBag);
  }

  // delete category to bag
  async deleteCategoryToBag(req, res) {
    let categoryId = req.params.categoryId;

    var { error } = Joi.validate(categoryId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    categoryId = mongoose.Types.ObjectId(categoryId);

    const isAvailable = await CategoryToBag.findOne({ category: categoryId });
    // console.log(isAvailable);

    if (!isAvailable) {
      return res.status(404).send("Category To Bag not found");
    }

    await new Fawn.Task()
      .remove(CategoryToBag, { category: categoryId })
      .update("categories", { _id: categoryId }, { inCategoriesToBag: false })
      .run();

    return res.send("Category To Bag deleted successfully");
  }
}

module.exports = CategoryToBagDomain;
