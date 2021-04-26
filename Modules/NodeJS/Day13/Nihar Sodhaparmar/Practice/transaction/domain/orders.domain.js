const { Order, validate } = require('../model/order.model');
const { Customer } = require('../model/customer.model');
const { Product } = require('../model/product.model');
const mongoose = require('mongoose');
const Fawn = require('fawn');

Fawn.init(mongoose);

class OrderDomain {

    // add order
    async addOrder(req, res) {

        const { error } = validate(req.body);

        if (error) {
            return res.status(404).send(error.details[0].message);
        }

        const customer = await Customer.findById(req.body.customerId);
        if (!customer) {
            return res.status(400).send('Invalid customer');
        }

        const product = await Product.findById(req.body.productId);
        if (!product) {
            return res.status(400).send('Invalid product');
        }

        if (req.body.quantity > product.numberInStock) {
            return res.status(400).send('Quantity is more than stock of product');
        }

        const order = new Order({
            customer: { name: customer.name },
            product: {
                name: product.name,
                price: product.price
            },
            quantity: req.body.quantity
        });

        try {

            new Fawn.Task()
                .save('orders', order)
                .update('products', { _id: product._id }, {
                    $inc: { numberInStock: -req.body.quantity }
                })
                .run();

            res.send(order);
        }
        catch (e) {
            res.status(500).send('Something failed');
        }



    }
}

module.exports = OrderDomain;