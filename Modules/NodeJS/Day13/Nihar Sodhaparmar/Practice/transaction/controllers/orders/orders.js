const express = require('express');
const router = express();
const OrderDomain = require('../../domain/orders.domain');

class OrdersController {

    // add order
    static async addOrder(req, res){
        const orderDomain = new OrderDomain();
        orderDomain.addOrder(req, res);
    }
}

// add order
router.post('/', OrdersController.addOrder);

module.exports = router;