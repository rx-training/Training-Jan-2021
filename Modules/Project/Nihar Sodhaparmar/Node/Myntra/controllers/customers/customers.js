const express = require("express");
const router = express.Router();
const CustomerDomain = require("../../domain/customer.domain");
const auth = require("../../middleware/auth");
const sellerAuth = require("../../middleware/seller");

class CustomersController {
  // add customer
  static async addCustomer(req, res) {
    const customerDomain = new CustomerDomain();
    customerDomain.addCustomer(req, res);
  }

  // get all customers
  static async getAllCustomers(req, res, next) {
    const customerDomain = new CustomerDomain();
    customerDomain.getAllCustomers(req, res, next);
  }

  // get customer by id
  static async getCustomerById(req, res) {
    const customerDomain = new CustomerDomain();
    customerDomain.getCustomerById(req, res);
  }

  // update customer
  static async updateCustomer(req, res) {
    const customerDomain = new CustomerDomain();
    customerDomain.updateCustomer(req, res);
  }

  // delete customer
  static async deleteCustomer(req, res) {
    const customerDomain = new CustomerDomain();
    customerDomain.deleteCustomer(req, res);
  }

  // get customer by email
  static async getCustomerByEmail(req, res) {
    const customerDomain = new CustomerDomain();
    customerDomain.getCustomerByEmail(req, res);
  }

  // update password
  static async updatePassword(req, res) {
    const customerDomain = new CustomerDomain();
    customerDomain.updatePassword(req, res);
  }

  // forget password
  static async forgetPassword(req, res) {
    const customerDomain = new CustomerDomain();
    customerDomain.forgetPassword(req, res);
  }
}

// add customer
router.post("/", CustomersController.addCustomer);
// get all customers
router.get("/", auth, CustomersController.getAllCustomers);
// get customer by id
router.get("/:customerId", auth, CustomersController.getCustomerById);
// update customer
router.put("/:customerId", auth, CustomersController.updateCustomer);
// delete customer
router.delete("/:customerId", auth, CustomersController.deleteCustomer);
// get customer by email
router.get("/email/:email", CustomersController.getCustomerByEmail);
// update password
router.put(
  "/change-password/:customerId",
  auth,
  CustomersController.updatePassword
);
// forget password
router.put("/forget-password/:customerId", CustomersController.forgetPassword);

module.exports = router;
