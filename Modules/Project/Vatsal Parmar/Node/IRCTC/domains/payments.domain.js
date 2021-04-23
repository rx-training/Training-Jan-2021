const PaymentModel = require("../models/payments.model");

class PaymentDomain {
  //To get all payments
  async getAllPayments(req, res) {
    const payments = await PaymentModel.find()
      .populate("train", "train_name")
      .populate("user", "user_name");
    res.send(payments);
  }
  //To get payment
  async getPayment(req, res) {
    let id = req.params.paymentId;
    const payment = await PaymentModel.findById(id)
      .populate("train", "train_name")
      .populate("user", "user_name");
    if (payment) {
      res.send(payment);
    } else {
      res.status(404).send("payment Not Found");
    }
  }
  //To insert payment
  async insertPayment(req, res) {
    //getting user input
    let data = req.body;

    const payment = new PaymentModel(data);
    const { error, value } = payment.joiValidate(data);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      try {
        const result = await payment.save();
        res.send(result);
      } catch (e) {
        res.send(e.message);
      }
    }
  }
  //To delete a payment
  async deletePayment(req, res) {
    let id = req.params.paymentId;
    const payment = await PaymentModel.findByIdAndDelete(id);
    if (payment) {
      res.send("payment Record Deleted Successfully");
    } else {
      res.status(404).send("Payment Not Found");
    }
  }
  //To update a payment
  async updatePayment(req, res) {
    //getting user input
    let data = req.body;
    let id = req.params.paymentId;

    const payment = new PaymentModel(data);
    const { error, value } = payment.joiValidate(data);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      try {
        const result = await PaymentModel.findByIdAndUpdate(
          id,
          {
            $set: data,
          },
          { new: true }
        );
        if (result) {
          res.send(result);
        } else {
          res.status(404).send("Payment Not Found");
        }
      } catch (e) {
        res.send(e.message);
      }
    }
  }
}

module.exports = PaymentDomain;
