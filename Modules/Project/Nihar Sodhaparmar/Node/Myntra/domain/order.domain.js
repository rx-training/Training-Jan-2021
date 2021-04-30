const { Order, validateOrder } = require('../models/order.model');
const { Customer } = require('../models/customer.model');
const { Product } = require('../models/product.model');
const Joi = require('joi');

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
                return res.status(404).send('Customer not found');
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
                    salePrice: product.price
                }

                newProductsArray.push(newProduct);

                totalPrice += p.quantity * product.price;
            }

            const order = new Order({
                customer: req.body.customer,
                products: newProductsArray,
                totalPrice: totalPrice
            });

            await order.save();

            res.send(order);

        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    // get all orders
    async getAllOrders(req, res) {
        const orders = await Order.find();
        res.send(orders);
    }

    // get order by id
    async getOrderById(req, res) {

        const orderId = req.params.orderId;

        const { error } = Joi.validate(orderId, Joi.objectId().required());

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(500).send('Order not found');
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
                res.status(404).send('Order not found');
            }

            const customer = await Customer.findById(req.body.customer);

            if (!customer) {
                return res.status(404).send('Customer not found');
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
                    salePrice: product.price
                }

                newProductsArray.push(newProduct);

                totalPrice += p.quantity * product.price;
            }

            await products.forEach(async (p) => {

            });

            order.set({
                customer: req.body.customer,
                products: newProductsArray,
                totalPrice: totalPrice
            });

            await order.save();

            res.send(order);

        }
        catch (e) {
            res.status(500).send(e);
        }
    }

    // delete order
    async deleteOrder(req, res){
     
        const orderId = req.params.orderId;

        var { error } = Joi.validate(orderId, Joi.objectId().required());

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        const result = await Order.deleteOne({ _id : orderId });

        if(result.deletedCount == 0){
            return res.status(404).send('Order not found');
        }
        else{
            return res.send('Order deleted successfully');
        }

    }
}

module.exports = OrderDomain;