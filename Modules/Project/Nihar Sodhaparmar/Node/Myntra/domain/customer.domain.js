const { Customer, validateCustomer } = require("../models/customer.model");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");

class CustomerDomain {
  // add customer
  async addCustomer(req, res) {
    const { error } = validateCustomer(req.body);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const customer = new Customer({
        customerName: req.body.customerName,
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

      await customer.save();

      res.send(
        _.pick(customer, [
          "_id",
          "customerName",
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

  // get all customers
  async getAllCustomers(req, res, next) {
    try {
      const customers = await Customer.find();
      res.send(customers);
    } catch (e) {
      next(e);
    }
  }

  // get customer by id
  async getCustomerById(req, res) {
    const customerId = req.params.customerId;

    const { error } = Joi.validate(customerId, Joi.objectId().required());

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).send("Customer not found");
    }

    res.send(
      _.pick(customer, [
        "_id",
        "customerName",
        "email",
        "contactNumber",
        "dob",
        "gender",
        "address",
        "password",
      ])
    );
  }

  // update customer
  async updateCustomer(req, res) {
    const customerId = req.params.customerId;

    var { error } = Joi.validate(customerId, Joi.objectId().required());

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    var { error } = validateCustomer(req.body);

    if (error) {
      return res.send(error.details[0].message);
    }

    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).send("Customer not found");
    }

    try {
      // const salt = await bcrypt.genSalt(10);
      // const hashedPassword = await bcrypt.hash(req.body.password, salt);

      customer.set({
        customerName: req.body.customerName,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        dob: req.body.dob,
        gender: req.body.gender,
        password: req.body.password,
        address: {
          addressLine1: req.body.address.addressLine1,
          addressLine2: req.body.address.addressLine2,
          pincode: req.body.address.pincode,
          city: req.body.address.city,
          state: req.body.address.state,
          country: req.body.address.country,
        },
      });

      await customer.save();

      res.send(
        _.pick(customer, [
          "_id",
          "customerName",
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

  // delete customer
  async deleteCustomer(req, res) {
    const customerId = req.params.customerId;

    var { error } = Joi.validate(customerId, Joi.objectId().required());

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const result = await Customer.deleteOne({ _id: customerId });

    if (result.deletedCount == 0) {
      return res.status(404).send("Customer not found");
    } else {
      return res.send("Customer deleted successfully");
    }
  }

  // get customer by email id
  async getCustomerByEmail(req, res) {
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

    const customer = await Customer.findOne({ email: email });

    if (!customer) {
      return res.status(404).send("Customer not found");
    }

    res.send(
      _.pick(customer, [
        "_id",
        "customerName",
        "email",
        "contactNumber",
        "dob",
        "gender",
        "address",
      ])
    );
  }

  // update password
  async updatePassword(req, res) {
    const customerId = req.params.customerId;

    var { error } = Joi.validate(customerId, Joi.objectId().required());

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const passwords = {
      oldPassword: req.body.oldPassword,
      newPassword: req.body.newPassword,
    };

    const validatePasswords = {
      oldPassword: Joi.string()
        .regex(
          new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
          )
        )
        .required(),
      newPassword: Joi.string()
        .regex(
          new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
          )
        )
        .required(),
    };

    var { error } = Joi.validate(passwords, validatePasswords);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).send("Customer not found");
    }

    const validPassword = await bcrypt.compare(
      passwords.oldPassword,
      customer.password
    );

    if (!validPassword) {
      return res.status(400).send("Invalid old password");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(passwords.newPassword, salt);

    let result = await Customer.updateOne(
      { _id: customerId },
      { $set: { password: hashedPassword } }
    );

    res.send(result);
  }

  // forget password
  async forgetPassword(req, res) {
    const customerId = req.params.customerId;

    var { error } = Joi.validate(customerId, Joi.objectId().required());

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const newPassword = req.body.newPassword;

    var { error } = Joi.validate(
      newPassword,
      Joi.string()
        .regex(
          new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})"
          )
        )
        .required()
    );

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const customer = await Customer.findById(customerId);

    if (!customer) {
      return res.status(404).send("Customer not found");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    let result = await Customer.updateOne(
      { _id: customerId },
      { $set: { password: hashedPassword } }
    );

    res.send(result);
  }
}

module.exports = CustomerDomain;
