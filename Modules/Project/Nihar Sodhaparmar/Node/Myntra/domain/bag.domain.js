const { Bag, validateBag } = require("../models/bag.model");
const { Wishlist } = require("../models/wishlist.model");
const Joi = require("joi");
const mongoose = require("mongoose");
var Fawn = require("fawn");
Fawn.init(mongoose, "OJLINTTASKCOLLECTION ");

class BagDomain {
  // add bag item
  async addBagItem(req, res) {
    const { error } = validateBag(req.body);

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    try {
      const bag = new Bag({
        customer: req.body.customer,
        product: req.body.product,
        size: req.body.size,
        quantity: req.body.quantity,
      });

      await bag.save();
      res.send(bag);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // get all bag items
  async getAllBagItems(req, res) {
    const bagItems = await Bag.find().populate("customer").populate("product");
    res.send(bagItems);
  }

  // get bag item by id
  async getBagItemById(req, res) {
    const bagItemId = req.params.bagItemId;

    var { error } = Joi.validate(bagItemId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const bag = await Bag.findById(bagItemId)
      .populate("customer")
      .populate("product");

    if (!bag) {
      return res.status(404).send("Bag Item not found");
    }

    res.send(bag);
  }

  // update bag item
  async updateBagItem(req, res) {
    const bagItemId = req.params.bagItemId;

    var { error } = Joi.validate(bagItemId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    var { error } = validateBag(req.body);

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const bag = await Bag.findById(bagItemId);

    if (!bag) {
      return res.status(404).send("Bag Item not found");
    }

    try {
      bag.set({
        customer: req.body.customer,
        product: req.body.product,
        size: req.body.size,
        quantity: req.body.quantity,
      });

      await bag.save();

      res.send(bag);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // delete bag item
  async deleteBagItem(req, res) {
    const bagItemId = req.params.bagItemId;

    var { error } = Joi.validate(bagItemId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const result = await Bag.deleteOne({ _id: bagItemId });

    if (result.deletedCount == 0) {
      return res.status(404).send("Bag Item not found");
    } else {
      return res.send("Bag Item deleted successfully");
    }
  }

  // get bag items by customer id
  async getBagItemsByCustomerId(req, res) {
    const customerId = req.params.customerId;

    var { error } = Joi.validate(customerId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const bag = await Bag.find({ customer: customerId })
      .populate("customer")
      .populate({
        path: "product",
        populate: {
          path: "brand",
          model: "brands",
        },
      });

    res.send(bag);
  }

  // add from wishlist to bag
  async addWishlistToBag(req, res) {
    const wishlistId = req.params.wishlistId;

    var { error } = Joi.validate(wishlistId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const schema = {
      size: Joi.string().required(),
      quantity: Joi.number().required(),
    };

    const reqSchema = {
      size: req.body.size,
      quantity: req.body.quantity,
    };

    var { error } = Joi.validate(reqSchema, schema);

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const wishlist = await Wishlist.findById(wishlistId);

    if (!wishlist) {
      return res.status(404).send("Wishlist Item not found");
    }

    try {
      const bagItem = await Bag.find({
        customer: wishlist.customer,
        product: wishlist.product,
        size: reqSchema.size,
      });

      if (bagItem.length !== 0) {
        await Wishlist.deleteOne({ _id: wishlist._id });
        res.send(bagItem);
      } else {
        const bag = new Bag({
          customer: wishlist.customer,
          product: wishlist.product,
          size: req.body.size,
          quantity: req.body.quantity,
        });

        await new Fawn.Task()
          .save("bags", bag)
          .remove(Wishlist, { _id: wishlist._id })
          .run();

        res.send(bag);
      }
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error.message);
    }
  }
}

module.exports = BagDomain;
