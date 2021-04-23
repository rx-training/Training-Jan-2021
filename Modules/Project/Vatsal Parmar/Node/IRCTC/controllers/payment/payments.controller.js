var express = require("express");
const PaymentDomain = require("../../domains/payments.domain");
var router = express.Router();

class PaymentController {
  //To get all payments
  static async get(req, res) {
    const paymentDomain = new PaymentDomain();
    paymentDomain.getAllPayments(req, res);
  }
  //to get payment
  static async getPayment(req, res) {
    const paymentDomain = new PaymentDomain();
    paymentDomain.getPayment(req, res);
  }
  //To insert payment
  static async insertPayment(req, res) {
    const paymentDomain = new PaymentDomain();
    paymentDomain.insertPayment(req, res);
  }
  //To update payment
  static async updatePayment(req, res) {
    const paymentDomain = new PaymentDomain();
    paymentDomain.updatePayment(req, res);
  }
  //To delete payment
  static async deletePayment(req, res) {
    const paymentDomain = new PaymentDomain();
    paymentDomain.deletePayment(req, res);
  }
}

//To insert payment
router.post("/", PaymentController.insertPayment);
//To get all payments
router.get("/", PaymentController.get);
//To get an single payment by id
router.get("/:paymentId", PaymentController.getPayment);
//To update payment
router.put("/:paymentId", PaymentController.updatePayment);
//To delete a payment
router.delete("/:paymentId", PaymentController.deletePayment);

module.exports = router;
