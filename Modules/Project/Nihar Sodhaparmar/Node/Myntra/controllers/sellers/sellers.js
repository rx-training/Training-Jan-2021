const express = require("express");
const router = express.Router();
const SellerDomain = require("../../domain/seller.domain");
const auth = require("../../middleware/auth");
const sellerAuth = require("../../middleware/seller");

class SellersController {
  // add seller
  static async addSeller(req, res) {
    const sellerDomain = new SellerDomain();
    sellerDomain.addSeller(req, res);
  }

  // get all sellers
  static async getAllSellers(req, res) {
    const sellerDomain = new SellerDomain();
    sellerDomain.getAllSellers(req, res);
  }

  // get seller by id
  static async getSellerById(req, res) {
    const sellerDomain = new SellerDomain();
    sellerDomain.getSellerById(req, res);
  }

  // update seller
  static async updateSeller(req, res) {
    const sellerDomain = new SellerDomain();
    sellerDomain.updateSeller(req, res);
  }

  // delete seller
  static async deleteSeller(req, res) {
    const sellerDomain = new SellerDomain();
    sellerDomain.deleteSeller(req, res);
  }

  // get seller by email
  static async getSellerByEmail(req, res) {
    const sellerDomain = new SellerDomain();
    sellerDomain.getSellerByEmail(req, res);
  }
}

// add seller
router.post("/", SellersController.addSeller);
// get all sellers
router.get("/", [auth, sellerAuth], SellersController.getAllSellers);
// get seller by id
router.get("/:sellerId", [auth, sellerAuth], SellersController.getSellerById);
// update seller
router.put("/:sellerId", [auth, sellerAuth], SellersController.updateSeller);
// delete seller
router.delete("/:sellerId", [auth, sellerAuth], SellersController.deleteSeller);
// get seller by email
router.get("/email/:email", SellersController.getSellerByEmail);

module.exports = router;
