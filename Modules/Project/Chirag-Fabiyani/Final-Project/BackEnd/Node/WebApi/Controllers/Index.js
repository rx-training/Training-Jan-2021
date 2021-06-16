const express = require('express');
const router = express.Router({mergeParams: true});
const Images = require('./Image.Controller');
const Locations = require('./Location.Controller');
const Contacts = require('./Contact.Controller');
const Services = require('./Service.Controller');
const Transactions = require('./Transaction.Controller');
const Categories = require('./Category.Controller');
const Ads = require('./Ad.Controller');
const Users = require('./User.Controller');
const Admin = require('./Admin.Controller');

router.use('/images',Images);
router.use('/locations',Locations);
router.use('/contacts',Contacts);
router.use('/services',Services);
router.use('/transactions',Transactions);
router.use('/categories',Categories)
router.use('/ads',Ads);
router.use('/users',Users);
router.use('/admin',Admin);

module.exports = router;