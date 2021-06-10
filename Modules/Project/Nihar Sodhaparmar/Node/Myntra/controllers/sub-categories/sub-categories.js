const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const sellerAuth = require("../../middleware/seller");
const SubCategoryDomain = require("../../domain/sub-category.domain");

class SubCategoriesController {
  // add sub category
  static async addSubCategory(req, res) {
    const subCategoryDomain = new SubCategoryDomain();
    subCategoryDomain.addSubCategory(req, res);
  }

  // get all sub categories
  static async getAllSubCategories(req, res) {
    const subCategoryDomain = new SubCategoryDomain();
    subCategoryDomain.getAllSubCategories(req, res);
  }

  // get sub cateory by id
  static async getSubCategoryById(req, res) {
    const subCategoryDomain = new SubCategoryDomain();
    subCategoryDomain.getSubCategoryById(req, res);
  }

  // update sub category
  static async updateSubCategory(req, res) {
    const subCategoryDomain = new SubCategoryDomain();
    subCategoryDomain.updateSubCategory(req, res);
  }

  // delete sub category
  static async deleteSubCategory(req, res) {
    const subCategoryDomain = new SubCategoryDomain();
    subCategoryDomain.deleteSubCategory(req, res);
  }
}

// add sub category
router.post("/", [auth, sellerAuth], SubCategoriesController.addSubCategory);
// get all sub categories
router.get("/", SubCategoriesController.getAllSubCategories);
// get sub cateory by id
router.get("/:subCategoryId", SubCategoriesController.getSubCategoryById);
// update sub category
router.put(
  "/:subCategoryId",
  [auth, sellerAuth],
  SubCategoriesController.updateSubCategory
);
// delete category
router.delete(
  "/:subCategoryId",
  [auth, sellerAuth],
  SubCategoriesController.deleteSubCategory
);

module.exports = router;
