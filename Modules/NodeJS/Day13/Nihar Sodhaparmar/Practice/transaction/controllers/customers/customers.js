const express = require('express');
const router = express();
const CustomerDomain = require('../../domain/customers.domain');

class CustomersController{

    // add customer
    static async addCustomer(req, res){
        const customerDomain = new CustomerDomain();
        customerDomain.addCustomer(req, res);
    }

    // get customers
    static async getCustomers(req, res){
        const customerDomain = new CustomerDomain();
        customerDomain.getCustomers(req, res);
    }
}

// add customer
router.post('/', CustomersController.addCustomer);

// get customers
router.get('/', CustomersController.getCustomers);

module.exports = router;