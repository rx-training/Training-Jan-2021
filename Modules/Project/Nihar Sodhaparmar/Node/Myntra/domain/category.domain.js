const { Category, validateCategory } = require("../models/category.model");
const Joi = require("joi");
const { Brand } = require("../models/brand.model");

class CategoryDomain {
  // add category
  async addCategory(req, res) {
    const { error } = validateCategory(req.body);

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    try {
      const category = new Category({
        mainCategory: req.body.mainCategory,
        categoryName: req.body.categoryName,
        inCategoriesToBag: req.body.inCategoriesToBag,
      });

      await category.save();

      res.send(category);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // get all categories
  async getAllCategories(req, res) {
    const categories = await Category.find().populate("mainCategory");
    res.send(categories);
  }

  // get cateory by id
  async getCategoryById(req, res) {
    const categoryId = req.params.categoryId;

    var { error } = Joi.validate(categoryId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const cateory = await Category.findById(categoryId);

    if (!cateory) {
      return res.status(404).send("Category not found");
    }

    res.send(cateory);
  }

  // update category
  async updateCategory(req, res) {
    const categoryId = req.params.categoryId;

    var { error } = Joi.validate(categoryId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    var { error } = validateCategory(req.body);

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const category = await Category.findById(categoryId);

    if (!category) {
      return res.status(404).send("Category not found");
    }

    try {
      category.set({
        mainCategory: req.body.mainCategory,
        categoryName: req.body.categoryName,
        inCategoriesToBag: req.body.inCategoriesToBag,
      });

      await category.save();

      res.send(category);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // delete category
  async deleteCategory(req, res) {
    const categoryId = req.params.categoryId;

    var { error } = Joi.validate(categoryId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const isUsed = await Brand.findOne({ category: categoryId });

    if (isUsed) {
      return res.status(409).send("Category is not allowed to delete");
    }

    const result = await Category.deleteOne({ _id: categoryId });

    if (result.deletedCount == 0) {
      return res.status(404).send("Category not found");
    } else {
      return res.send("Category deleted successfully");
    }
  }
}

module.exports = CategoryDomain;
