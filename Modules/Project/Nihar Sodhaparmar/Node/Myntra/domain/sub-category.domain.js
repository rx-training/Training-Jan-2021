const {
  SubCategory,
  validateSubCategory,
} = require("../models/sub-category.model");
const Joi = require("joi");
const { Product } = require("../models/product.model");

class SubCategoryDomain {
  // add sub category
  async addSubCategory(req, res) {
    const { error } = validateSubCategory(req.body);

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    try {
      const subCategory = new SubCategory({
        subCategoryName: req.body.subCategoryName,
      });

      await subCategory.save();

      res.send(subCategory);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // get all sub categories
  async getAllSubCategories(req, res) {
    const subCategories = await SubCategory.find().select("subCategoryName");
    res.send(subCategories);
  }

  // get sub cateory by id
  async getSubCategoryById(req, res) {
    const subCategoryId = req.params.subCategoryId;

    var { error } = Joi.validate(subCategoryId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const subCateory = await SubCategory.findById(subCategoryId).select(
      "subCategoryName"
    );

    if (!subCateory) {
      return res.status(404).send("Sub Category not found");
    }

    res.send(subCateory);
  }

  // update sub category
  async updateSubCategory(req, res) {
    const subCategoryId = req.params.subCategoryId;

    var { error } = Joi.validate(subCategoryId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    var { error } = validateSubCategory(req.body);

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const subCateory = await SubCategory.findById(subCategoryId);

    if (!subCateory) {
      return res.status(404).send("Sub Category not found");
    }

    try {
      subCateory.set({
        subCategoryName: req.body.subCategoryName,
      });

      await subCateory.save();

      res.send(subCateory);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // delete sub category
  async deleteSubCategory(req, res) {
    const subCategoryId = req.params.subCategoryId;

    var { error } = Joi.validate(subCategoryId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const isUsed = await Product.findOne({ subCategory: subCategoryId });

    if (isUsed) {
      return res.status(409).send("Sub Category is not allowed to delete");
    }

    const result = await SubCategory.deleteOne({ _id: subCategoryId });

    if (result.deletedCount == 0) {
      return res.status(404).send("Sub Category not found");
    } else {
      return res.send("Sub Category deleted successfully");
    }
  }
}

module.exports = SubCategoryDomain;
