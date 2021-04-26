var express = require('express');
var router = express.Router();

var verifyToken = require('./verifyToken')

/* GET customers listing without protection. */
router.get('/data', verifyToken, function (req, res, next) {
    let customerdata = [
        {
            customerid: 1,
            customername: 'Mahfuz Bappy'
        },
        {
            customerid: 2,
            customername: 'Shamim Uddin'
        },
        {
            customerid: 3,
            customername: 'Ishani Isha'
        }
    ];

    res.json(customerdata);
});;

module.exports = router;
