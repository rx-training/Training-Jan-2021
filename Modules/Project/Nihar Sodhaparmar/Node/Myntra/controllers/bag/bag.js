const express = require("express");
const router = express.Router();
const BagDomain = require("../../domain/bag.domain");
const auth = require("../../middleware/auth");

class BagController {
  // add bag item
  static async addBagItem(req, res) {
    const bagDomain = new BagDomain();
    bagDomain.addBagItem(req, res);
  }

  // get all bag items
  static async getAllBagItems(req, res) {
    const bagDomain = new BagDomain();
    bagDomain.getAllBagItems(req, res);
  }

  // get bag item by id
  static async getBagItemById(req, res) {
    const bagDomain = new BagDomain();
    bagDomain.getBagItemById(req, res);
  }

  // update bag item
  static async updateBagItem(req, res) {
    const bagDomain = new BagDomain();
    bagDomain.updateBagItem(req, res);
  }

  // delete bag item
  static async deleteBagItem(req, res) {
    const bagDomain = new BagDomain();
    bagDomain.deleteBagItem(req, res);
  }

  // get bag items by customer id
  static async getBagItemsByCustomerId(req, res) {
    const bagDomain = new BagDomain();
    bagDomain.getBagItemsByCustomerId(req, res);
  }

  // add from wishlist to bag
  static async addWishlistToBag(req, res) {
    const bagDomain = new BagDomain();
    bagDomain.addWishlistToBag(req, res);
  }
}

// add bag item
router.post("/", auth, BagController.addBagItem);

// get all bag items
router.get("/", auth, BagController.getAllBagItems);

// get bag item by id
router.get("/:bagItemId", auth, BagController.getBagItemById);

// update bag item
router.put("/:bagItemId", auth, BagController.updateBagItem);

// delete bag item
router.delete("/:bagItemId", auth, BagController.deleteBagItem);

// get bag items by customer id
router.get(
  "/customer/:customerId",
  auth,
  BagController.getBagItemsByCustomerId
);

// add from wishlist to bag
router.post(
  "/addwishlisttobag/:wishlistId",
  auth,
  BagController.addWishlistToBag
);

module.exports = router;
