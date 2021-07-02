const {
  MainCategory,
  validateMainCategory,
} = require("../models/main-category.model");
const Joi = require("joi");
const { Category } = require("../models/category.model");

class SubCategoryDomain {
  // add main category
  async addMainCategory(req, res) {
    const { error } = validateMainCategory(req.body);

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    try {
      const mainCategory = new MainCategory({
        mainCategoryName: req.body.mainCategoryName,
      });

      await mainCategory.save();

      res.send(mainCategory);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // get all main categories
  async getAllMainCategories(req, res) {
    const mainCategories = await MainCategory.find().select("mainCategoryName");
    res.send(mainCategories);
  }

  // get main cateory by id
  async getMainCategoryById(req, res) {
    const mainCategoryId = req.params.mainCategoryId;

    var { error } = Joi.validate(mainCategoryId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const mainCateory = await MainCategory.findById(mainCategoryId).select(
      "mainCategoryName"
    );

    if (!mainCateory) {
      return res.status(404).send("Main Category not found");
    }

    res.send(mainCateory);
  }

  // update main category
  async updateMainCategory(req, res) {
    const mainCategoryId = req.params.mainCategoryId;

    var { error } = Joi.validate(mainCategoryId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    var { error } = validateMainCategory(req.body);

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const mainCategory = await MainCategory.findById(mainCategoryId);

    if (!mainCategory) {
      return res.status(404).send("Main Category not found");
    }

    try {
      mainCategory.set({
        mainCategoryName: req.body.mainCategoryName,
      });

      await mainCategory.save();

      res.send(mainCategory);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // delete main category
  async deleteMainCategory(req, res) {
    const mainCategoryId = req.params.mainCategoryId;

    var { error } = Joi.validate(mainCategoryId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const isUsed = await Category.findOne({ mainCategory: mainCategoryId });

    if (isUsed) {
      return res.status(409).send("Main Category is not allowed to delete");
    }

    const result = await MainCategory.deleteOne({ _id: mainCategoryId });

    if (result.deletedCount == 0) {
      return res.status(404).send("Main Category not found");
    } else {
      return res.send("Main Category deleted successfully");
    }
  }
}

module.exports = SubCategoryDomain;
