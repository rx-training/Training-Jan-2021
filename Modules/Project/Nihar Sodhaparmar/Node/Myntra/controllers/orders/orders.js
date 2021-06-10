const express = require("express");
const router = express.Router();
const OrderDomain = require("../../domain/order.domain");
const auth = require("../../middleware/auth");
const sellerAuth = require("../../middleware/seller");

class OrdersController {
  // add order
  static async addOrder(req, res) {
    const orderDomain = new OrderDomain();
    orderDomain.addOrder(req, res);
  }

  // get all orders
  static async getAllOrders(req, res) {
    const orderDomain = new OrderDomain();
    orderDomain.getAllOrders(req, res);
  }

  // get order by id
  static async getOrderById(req, res) {
    const orderDomain = new OrderDomain();
    orderDomain.getOrderById(req, res);
  }

  // update order
  static async updateOrder(req, res) {
    const orderDomain = new OrderDomain();
    orderDomain.updateOrder(req, res);
  }

  // delete order
  static async deleteOrder(req, res) {
    const orderDomain = new OrderDomain();
    orderDomain.deleteOrder(req, res);
  }

  // get orders by customer id
  static async getOrdersByCustomerId(req, res) {
    const orderDomain = new OrderDomain();
    orderDomain.getOrdersByCustomerId(req, res);
  }
}

// add order
router.post("/", auth, OrdersController.addOrder);
// get all orders
router.get("/", auth, OrdersController.getAllOrders);
// get order by id
router.get("/:orderId", auth, OrdersController.getOrderById);
// update order
router.put("/:orderId", auth, OrdersController.updateOrder);
// delete order
router.delete("/:orderId", auth, OrdersController.deleteOrder);
// get orders by customer id
router.get(
  "/customer/:customerId",
  auth,
  OrdersController.getOrdersByCustomerId
);

module.exports = router;
