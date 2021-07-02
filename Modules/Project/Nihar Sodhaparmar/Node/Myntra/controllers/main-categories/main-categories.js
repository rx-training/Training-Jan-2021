const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const sellerAuth = require("../../middleware/seller");
const MainCategoryDomain = require("../../domain/main-category.domain");

class MainCategoriesController {
  // add main category
  static async addMainCategory(req, res) {
    const mainCategoryDomain = new MainCategoryDomain();
    mainCategoryDomain.addMainCategory(req, res);
  }

  // get all main categories
  static async getAllMainCategories(req, res) {
    const mainCategoryDomain = new MainCategoryDomain();
    mainCategoryDomain.getAllMainCategories(req, res);
  }

  // get main cateory by id
  static async getMainCategoryById(req, res) {
    const mainCategoryDomain = new MainCategoryDomain();
    mainCategoryDomain.getMainCategoryById(req, res);
  }

  // update main category
  static async updateMainCategory(req, res) {
    const mainCategoryDomain = new MainCategoryDomain();
    mainCategoryDomain.updateMainCategory(req, res);
  }

  // delete main category
  static async deleteMainCategory(req, res) {
    const mainCategoryDomain = new MainCategoryDomain();
    mainCategoryDomain.deleteMainCategory(req, res);
  }
}

// add main category
router.post("/", [auth, sellerAuth], MainCategoriesController.addMainCategory);
// get all main categories
router.get("/", MainCategoriesController.getAllMainCategories);
// get main cateory by id
router.get("/:mainCategoryId", MainCategoriesController.getMainCategoryById);
// update main category
router.put(
  "/:mainCategoryId",
  [auth, sellerAuth],
  MainCategoriesController.updateMainCategory
);
// delete category
router.delete(
  "/:mainCategoryId",
  [auth, sellerAuth],
  MainCategoriesController.deleteMainCategory
);

module.exports = router;
