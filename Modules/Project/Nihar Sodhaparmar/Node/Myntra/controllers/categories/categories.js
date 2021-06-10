const express = require("express");
const router = express.Router();
const CategoryDomain = require("../../domain/category.domain");
const auth = require("../../middleware/auth");
const sellerAuth = require("../../middleware/seller");

class CategoriesController {
  // add category
  static async addCategory(req, res) {
    const categoryDomain = new CategoryDomain();
    categoryDomain.addCategory(req, res);
  }

  // get all categories
  static async getAllCategories(req, res) {
    const categoryDomain = new CategoryDomain();
    categoryDomain.getAllCategories(req, res);
  }

  // get cateory by id
  static async getCategoryById(req, res) {
    const categoryDomain = new CategoryDomain();
    categoryDomain.getCategoryById(req, res);
  }

  // update category
  static async updateCategory(req, res) {
    const categoryDomain = new CategoryDomain();
    categoryDomain.updateCategory(req, res);
  }

  // delete category
  static async deleteCategory(req, res) {
    const categoryDomain = new CategoryDomain();
    categoryDomain.deleteCategory(req, res);
  }
}

// add category
router.post("/", [auth, sellerAuth], CategoriesController.addCategory);
// get all categories
router.get("/", CategoriesController.getAllCategories);
// get cateory by id
router.get("/:categoryId", CategoriesController.getCategoryById);
// update category
router.put(
  "/:categoryId",
  [auth, sellerAuth],
  CategoriesController.updateCategory
);
// delete category
router.delete(
  "/:categoryId",
  [auth, sellerAuth],
  CategoriesController.deleteCategory
);

module.exports = router;
