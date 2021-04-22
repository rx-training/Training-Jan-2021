const { Customer, validate } = require('../model/customer.model');

class CustomerDomain{

    // add customer
    async addCustomer(req, res){

        const { error } = validate(req.body);

        if(error){
            return res.status(404).send(error.details[0].message);
        }

        const customer = new Customer({
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address
        });

        await customer.save();

        res.send(customer);
    }

    // get customers
    async getCustomers(req, res){
        const customers = await Customer.find().select({ name: 1, phone: 1, address: 1 });
        res.send(customers);
    }
}

module.exports = CustomerDomain;