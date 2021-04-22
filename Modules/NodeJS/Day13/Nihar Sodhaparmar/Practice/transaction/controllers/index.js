const express = require('express');
const router = express();

const customerRouter = require('./customers/customers');
const orderRouter = require('./orders/orders');
const productRouter = require('./products/products');

router.use('/customers', customerRouter);
router.use('/products', productRouter);
router.use('/orders', orderRouter);

module.exports = router;