const { Seller, validateSeller } = require("../models/seller.model");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");

class SellerDomain {
  // add seller
  async addSeller(req, res) {
    const { error } = validateSeller(req.body);

    if (error) {
      return res.send(error.details[0].message);
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const seller = new Seller({
        sellerName: req.body.sellerName,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        dob: req.body.dob,
        gender: req.body.gender,
        password: hashedPassword,
        address: {
          addressLine1: req.body.address.addressLine1,
          addressLine2: req.body.address.addressLine2,
          pincode: req.body.address.pincode,
          city: req.body.address.city,
          state: req.body.address.state,
          country: req.body.address.country,
        },
      });

      await seller.save();

      res.send(
        _.pick(seller, [
          "_id",
          "sellerName",
          "email",
          "contactNumber",
          "dob",
          "gender",
          "address",
        ])
      );
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // get all sellers
  async getAllSellers(req, res) {
    const sellers = await Seller.find();
    res.send(sellers);
  }

  // get seller by id
  async getSellerById(req, res) {
    const sellerId = req.params.sellerId;

    const { error } = Joi.validate(sellerId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const seller = await Seller.findById(sellerId);

    if (!seller) {
      return res.status(500).send("Seller not found");
    }

    res.send(
      _.pick(seller, [
        "_id",
        "sellerName",
        "email",
        "contactNumber",
        "dob",
        "gender",
        "address",
      ])
    );
  }

  // update seller
  async updateSeller(req, res) {
    const sellerId = req.params.sellerId;

    var { error } = Joi.validate(sellerId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    var { error } = validateSeller(req.body);

    if (error) {
      return res.send(error.details[0].message);
    }

    const seller = await Seller.findById(sellerId);

    if (!seller) {
      return res.status(500).send("Seller not found");
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      seller.set({
        sellerName: req.body.sellerName,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        dob: req.body.dob,
        gender: req.body.gender,
        password: hashedPassword,
        address: {
          addressLine1: req.body.address.addressLine1,
          addressLine2: req.body.address.addressLine2,
          pincode: req.body.address.pincode,
          city: req.body.address.city,
          state: req.body.address.state,
          country: req.body.address.country,
        },
      });

      await seller.save();

      res.send(
        _.pick(seller, [
          "_id",
          "sellerName",
          "email",
          "contactNumber",
          "dob",
          "gender",
          "address",
        ])
      );
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // delete seller
  async deleteSeller(req, res) {
    const sellerId = req.params.sellerId;

    var { error } = Joi.validate(sellerId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const result = await Seller.deleteOne({ _id: sellerId });

    if (result.deletedCount == 0) {
      return res.status(404).send("Seller not found");
    } else {
      return res.send("Seller deleted successfully");
    }
  }

  // get seller by email id
  async getSellerByEmail(req, res) {
    const email = req.params.email;

    var { error } = Joi.validate(
      email,
      Joi.string()
        .regex(new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"))
        .required()
    );

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const seller = await Seller.findOne({ email: email });

    if (!seller) {
      return res.status(404).send("Seller not found");
    }

    res.send(
      _.pick(seller, [
        "_id",
        "sellerName",
        "email",
        "contactNumber",
        "dob",
        "gender",
        "address",
      ])
    );
  }
}

module.exports = SellerDomain;
