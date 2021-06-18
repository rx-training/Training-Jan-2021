require("dotenv").config();
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { Seller } = require("../../models/seller.model");
const { Customer } = require("../../models/customer.model");

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  if (req.body.role == "seller") {
    let seller = await Seller.findOne({ email: req.body.email });
    if (!seller) {
      return res.status(400).send("Invalid email or password");
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      seller.password
    );
    if (!validPassword) {
      return res.status(400).send("Invalid email or password");
    }

    const token = jwt.sign(
      { _id: seller._id, role: "seller" },
      process.env.MYNTRA_JWT_PRIVATE_KEY,
      {
        expiresIn: "60m",
      }
    );

    res.status(200).json({
      message: "Login Successful",
      jwtoken: token,
      userId: seller._id,
      isAdmin: true,
    });
  } else if (req.body.role == "customer") {
    const customer = await Customer.findOne({ email: req.body.email });
    if (!customer) {
      return res.status(400).send("Invalid email or password");
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      customer.password
    );
    if (!validPassword) {
      return res.status(400).send("Invalid email or password");
    }

    const token = jwt.sign(
      { _id: customer._id, role: "customer" },
      process.env.MYNTRA_JWT_PRIVATE_KEY,
      {
        expiresIn: "60m",
      }
    );

    res.status(200).json({
      message: "Login Successful",
      jwtoken: token,
      userId: customer._id,
      isAdmin: false,
    });
  } else {
    res.status(400).send("Provide valid role for login");
  }
});

function validateUser(user) {
  const schema = {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().valid("seller", "customer").required(),
  };

  return Joi.validate(user, schema);
}

module.exports = router;
