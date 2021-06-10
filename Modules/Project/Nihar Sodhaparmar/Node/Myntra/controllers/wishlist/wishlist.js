const express = require("express");
const router = express.Router();
const WishlistDomain = require("../../domain/wishlist.domain");
const auth = require("../../middleware/auth");

class WishlistController {
  // add wishlist item
  static async addWishlistItem(req, res) {
    const wishlistDomain = new WishlistDomain();
    wishlistDomain.addWishlistItem(req, res);
  }

  // get all wishlist items
  static async getAllWishlistItems(req, res) {
    const wishlistDomain = new WishlistDomain();
    wishlistDomain.getAllWishlistItems(req, res);
  }

  // get wishlist item by id
  static async getWishlistItemById(req, res) {
    const wishlistDomain = new WishlistDomain();
    wishlistDomain.getWishlistItemById(req, res);
  }

  // update wishlist item
  static async updateWishlistItem(req, res) {
    const wishlistDomain = new WishlistDomain();
    wishlistDomain.updateWishlistItem(req, res);
  }

  // delete wishlist item
  static async deleteWishlistItem(req, res) {
    const wishlistDomain = new WishlistDomain();
    wishlistDomain.deleteWishlistItem(req, res);
  }

  // get wishlist items by customer id
  static async getWishlistItemsByCustomerId(req, res) {
    const wishlistDomain = new WishlistDomain();
    wishlistDomain.getWishlistItemsByCustomerId(req, res);
  }
}

// add wishlist item
router.post("/", auth, WishlistController.addWishlistItem);

// get all wishlist items
router.get("/", auth, WishlistController.getAllWishlistItems);

// get wishlist item by id
router.get("/:wishlistId", auth, WishlistController.getWishlistItemById);

// update wishlist item
router.put("/:wishlistId", auth, WishlistController.updateWishlistItem);

// delete wishlist item
router.delete("/:wishlistId", auth, WishlistController.deleteWishlistItem);

// get wishlist items by customer id
router.get(
  "/customer/:customerId",
  auth,
  WishlistController.getWishlistItemsByCustomerId
);

module.exports = router;
