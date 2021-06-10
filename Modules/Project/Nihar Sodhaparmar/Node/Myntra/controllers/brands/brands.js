const express = require("express");
const router = express.Router();
const BrandDomain = require("../../domain/brand.domain");
const auth = require("../../middleware/auth");
const sellerAuth = require("../../middleware/seller");

class BrandsController {
  // add brand
  static async addBrand(req, res) {
    const brandDomain = new BrandDomain();
    brandDomain.addBrand(req, res);
  }

  // get all brands
  static async getAllBrands(req, res) {
    const brandDomain = new BrandDomain();
    brandDomain.getAllBrands(req, res);
  }

  // get brand by id
  static async getBrandById(req, res) {
    const brandDomain = new BrandDomain();
    brandDomain.getBrandById(req, res);
  }

  // update brand
  static async updateBrand(req, res) {
    const brandDomain = new BrandDomain();
    brandDomain.updateBrand(req, res);
  }

  // delete brand
  static async deleteBrand(req, res) {
    const brandDomain = new BrandDomain();
    brandDomain.deleteBrand(req, res);
  }
}

// add brand
router.post("/", [auth, sellerAuth], BrandsController.addBrand);
// get all brands
router.get("/", BrandsController.getAllBrands);
// get brand by id
router.get("/:brandId", BrandsController.getBrandById);
// update brand
router.put("/:brandId", [auth, sellerAuth], BrandsController.updateBrand);
// delete brand
router.delete("/:brandId", [auth, sellerAuth], BrandsController.deleteBrand);

module.exports = router;
