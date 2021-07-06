const { Order, validateOrder } = require("../models/order.model");
const { Customer } = require("../models/customer.model");
const { Product } = require("../models/product.model");
const nodemailer = require("nodemailer");
const Joi = require("joi");
const mongoose = require("mongoose");
var Fawn = require("fawn");
Fawn.init(mongoose, "OJLINTTASKCOLLECTION1");

class OrderDomain {
  // add order
  async addOrder(req, res) {
    const { error } = validateOrder(req.body);

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    try {
      const customer = await Customer.findById(req.body.customer);

      if (!customer) {
        return res.status(404).send("Customer not found");
      }

      const products = req.body.products;
      var product;
      const newProductsArray = [];
      var totalPrice = 0;
      var totalItems = 0;
      var productsArrayString = "";

      for (var p of products) {
        product = await Product.findById(p.product);

        if (!product) {
          return res.status(404).send(`Product ${p.product} not found`);
        }

        productsArrayString += `<div> 
                                  <p style="font-size:1.2em"> ${product.productName} <p> 
                                  <p> Quantity : ${p.quantity} </p> 
                                  <p> Product Price : Rs. ${product.price} </p>
                                  <hr style="border:none;border-top:1px solid #eee" />
                                </div>`;

        var newProduct = {
          product: p.product,
          size: p.size,
          quantity: p.quantity,
          salePrice:
            parseInt(product.price) -
            parseInt((parseInt(product.price) * parseInt(product.offer)) / 100),
        };

        newProductsArray.push(newProduct);

        totalPrice +=
          parseInt(p.quantity) *
          (parseInt(product.price) -
            parseInt(
              (parseInt(product.price) * parseInt(product.offer)) / 100
            ));
        totalItems += p.quantity;
      }

      const order = new Order({
        customer: req.body.customer,
        products: newProductsArray,
        totalPrice: totalPrice,
        totalItems: totalItems,
      });

      await new Fawn.Task()
        .save(Order, order)
        .remove("bags", { customer: customer._id })
        .run();

      //   await order.save();

      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "myntra.project.21@gmail.com",
          pass: "myntra@1234",
        },
      });

      let info = await transporter.sendMail({
        from: "myntra.project.21@gmail.com",
        to: customer.email,
        subject: "Order Details",
        html: `
        <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
          <div style="margin:50px auto;width:70%;padding:20px 0">
            <div style="border-bottom:1px solid #eee">
              <a
                href="#"
                style="font-size:1.6em;color: #ff3f6c;text-decoration:none;font-weight:600"
              >
                Myntra
              </a>
            </div>
            <p style="font-size:1.2em">Hi,</p>
            <p style='font-size:1.1em'>
              Your oreder placed successfully. Here is your order details
            </p>
            <hr style="border:none;border-top:1px solid #eee" />
            <p style="font-size:1.2em">
              Order Reference Number : ${order._id}
            </p>
            <hr style="border:none;border-top:1px solid #eee" />
            <div>
              ${productsArrayString}
            </div>
            <div>
              <p style='font-size:1.2em'> OrderTotal : Rs. ${totalPrice} </p>
            </div>
            <hr style="border:none;border-top:1px solid #eee" />
          </div>
        </div>
      `,
      });

      res.send(order);
    } catch (e) {
      console.log(e);
      res.status(500).send(e);
    }
  }

  // get all orders
  async getAllOrders(req, res) {
    const orders = await Order.find()
      .populate({
        path: "products.product",
        model: "products",
        populate: {
          path: "brand",
          model: "brands",
        },
      })
      .populate({
        path: "products.product",
        model: "products",
        populate: {
          path: "category",
          model: "categories",
        },
      })
      .sort({ orderDate: -1 });
    res.send(orders);
  }

  // get order by id
  async getOrderById(req, res) {
    const orderId = req.params.orderId;

    const { error } = Joi.validate(orderId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const order = await Order.findById(orderId)
      .populate({
        path: "products.product",
        model: "products",
        populate: {
          path: "brand",
          model: "brands",
        },
      })
      .populate({
        path: "products.product",
        model: "products",
        populate: {
          path: "category",
          model: "categories",
        },
      })
      .sort({ orderDate: -1 });

    if (!order) {
      return res.status(500).send("Order not found");
    }

    res.send(order);
  }

  // update order
  async updateOrder(req, res) {
    const orderId = req.params.orderId;

    var { error } = Joi.validate(orderId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    var { error } = validateOrder(req.body);

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    try {
      const order = await Order.findById(orderId);

      if (!order) {
        res.status(404).send("Order not found");
      }

      const customer = await Customer.findById(req.body.customer);

      if (!customer) {
        return res.status(404).send("Customer not found");
      }

      const products = req.body.products;
      var product;
      const newProductsArray = [];
      var totalPrice = 0;

      for (var p of products) {
        product = await Product.findById(p.product);

        if (!product) {
          return res.status(404).send(`Product ${p.product} not found`);
        }

        var newProduct = {
          product: p.product,
          size: p.size,
          quantity: p.quantity,
          salePrice: product.price,
        };

        newProductsArray.push(newProduct);

        totalPrice += p.quantity * product.price;
      }

      await products.forEach(async (p) => {});

      order.set({
        customer: req.body.customer,
        products: newProductsArray,
        totalPrice: totalPrice,
      });

      await order.save();

      res.send(order);
    } catch (e) {
      res.status(500).send(e);
    }
  }

  // delete order
  async deleteOrder(req, res) {
    const orderId = req.params.orderId;

    var { error } = Joi.validate(orderId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const result = await Order.deleteOne({ _id: orderId });

    if (result.deletedCount == 0) {
      return res.status(404).send("Order not found");
    } else {
      return res.send("Order deleted successfully");
    }
  }

  // get orders by customer id
  async getOrdersByCustomerId(req, res) {
    const customerId = req.params.customerId;

    var { error } = Joi.validate(customerId, Joi.objectId().required());

    if (error) {
      return res.status(404).send(error.details[0].message);
    }

    const order = await Order.find({ customer: customerId })
      .populate({
        path: "products.product",
        model: "products",
        populate: {
          path: "brand",
          model: "brands",
        },
      })
      .populate({
        path: "products.product",
        model: "products",
        populate: {
          path: "category",
          model: "categories",
        },
      })
      .sort({ orderDate: -1 });

    res.send(order);
  }
}

module.exports = OrderDomain;
