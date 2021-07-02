const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const sellerAuth = require("../../middleware/seller");
const CategoryToBagDomain = require("../../domain/categories-to-bag.domain");

const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype == "image/jpeg" ||
    file.mimetype == "imae/png" ||
    file.mimetype == "imae/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

class CategoriesToBagController {
  // add category to bag
  static async addCategoryToBag(req, res) {
    const categoryToBagDomain = new CategoryToBagDomain();
    categoryToBagDomain.addCategoryToBag(req, res);
  }

  // get all categories to bag
  static async getAllCategoriesToBag(req, res) {
    const categoryToBagDomain = new CategoryToBagDomain();
    categoryToBagDomain.getAllCategoriesToBag(req, res);
  }

  // delete category to bag
  static async deleteCategoryToBag(req, res) {
    const categoryToBagDomain = new CategoryToBagDomain();
    categoryToBagDomain.deleteCategoryToBag(req, res);
  }
}

// add category to bag
router.post(
  "/",
  [auth, sellerAuth, upload.single("image")],
  CategoriesToBagController.addCategoryToBag
);

// get all categories to bag
router.get("/", CategoriesToBagController.getAllCategoriesToBag);

// delete category to bag
router.delete(
  "/:categoryId",
  [auth, sellerAuth],
  CategoriesToBagController.deleteCategoryToBag
);

module.exports = router;
