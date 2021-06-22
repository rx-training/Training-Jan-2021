const express = require("express");
const router = express.Router();
const ProductDomain = require("../../domain/product.domain");
const auth = require("../../middleware/auth");
const sellerAuth = require("../../middleware/seller");

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

class ProductsController {
  // add product
  static async addProduct(req, res) {
    const productDomain = new ProductDomain();
    productDomain.addProduct(req, res);
  }

  // get all products
  static async getAllProducts(req, res) {
    const productDomain = new ProductDomain();
    productDomain.getAllProducts(req, res);
  }

  // get product by id
  static async getProductById(req, res) {
    const productDomain = new ProductDomain();
    productDomain.getProductById(req, res);
  }

  // update product
  static async updateProduct(req, res) {
    const productDomain = new ProductDomain();
    productDomain.updateProduct(req, res);
  }

  // delete product
  static async deleteProduct(req, res) {
    const productDomain = new ProductDomain();
    productDomain.deleteProduct(req, res);
  }

  // update images
  static async updateImages(req, res) {
    const productDomain = new ProductDomain();
    productDomain.updateImages(req, res);
  }

  // add images
  static async addImages(req, res) {
    const productDomain = new ProductDomain();
    productDomain.addImages(req, res);
  }
}

// add product
router.post(
  "/",
  [auth, sellerAuth, upload.array("images")],
  ProductsController.addProduct
);
// get all products
router.get("/", ProductsController.getAllProducts);
// get product by id
router.get("/:productId", ProductsController.getProductById);
// update product
router.put("/:productId", [auth, sellerAuth], ProductsController.updateProduct);
// delete product
router.delete(
  "/:productId",
  [auth, sellerAuth],
  ProductsController.deleteProduct
);
// update images
router.put(
  "/images/:productId",
  [auth, sellerAuth],
  ProductsController.updateImages
);
// add images
router.post(
  "/images/:productId",
  [auth, sellerAuth, upload.array("images")],
  ProductsController.addImages
);

module.exports = router;
