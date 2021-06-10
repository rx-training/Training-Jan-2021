const { Wishlist, validateWishlist } = require("../models/wishlist.model");
const Joi = require("joi");

class WishlistDomain {
  // add wishlist item
  async addWishlistItem(req, res) {
    const { error } = validateWishlist(req.body);

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    try {
      const wishlist = new Wishlist({
        customer: req.body.customer,
        product: req.body.product,
      });

      await wishlist.save();
      res.send(wishlist);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // get all wishlist items
  async getAllWishlistItems(req, res) {
    const wishlistItems = await Wishlist.find()
      .populate("customer")
      .populate("product");
    res.send(wishlistItems);
  }

  // get wishlist item by id
  async getWishlistItemById(req, res) {
    const wishlistId = req.params.wishlistId;

    var { error } = Joi.validate(wishlistId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const wishlist = await Wishlist.findById(wishlistId)
      .populate("customer")
      .populate("product");

    if (!wishlist) {
      return res.status(404).send("Wishlist Item not found");
    }

    res.send(wishlist);
  }

  // update wishlist item
  async updateWishlistItem(req, res) {
    const wishlistId = req.params.wishlistId;

    var { error } = Joi.validate(wishlistId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    var { error } = validateWishlist(req.body);

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const wishlist = await Wishlist.findById(wishlistId);

    if (!wishlist) {
      return res.status(404).send("Wishlist Item not found");
    }

    try {
      wishlist.set({
        customer: req.body.customer,
        product: req.body.product,
      });

      await wishlist.save();

      res.send(wishlist);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // delete wishlist item
  async deleteWishlistItem(req, res) {
    const wishlistId = req.params.wishlistId;

    var { error } = Joi.validate(wishlistId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const result = await Wishlist.deleteOne({ _id: wishlistId });

    if (result.deletedCount == 0) {
      return res.status(404).send("Wishlist Item not found");
    } else {
      return res.send("Wishlist Item deleted successfully");
    }
  }

  // get wishlist items by customer id
  async getWishlistItemsByCustomerId(req, res) {
    const customerId = req.params.customerId;

    var { error } = Joi.validate(customerId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const wishlist = await Wishlist.find({ customer: customerId })
      .populate("customer")
      .populate({
        path: "product",
        populate: {
          path: "brand",
          model: "brands",
        },
      });

    res.send(wishlist);
  }
}

module.exports = WishlistDomain;
