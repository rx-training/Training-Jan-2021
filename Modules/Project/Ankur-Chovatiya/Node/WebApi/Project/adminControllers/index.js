const express = require('express');
const app = express();
const router = express.Router();
const aircraftRouter = require('./aircraft');
const addressRouter = require('./address');
const airportRouter = require('./airport');
const routeRouter = require('./rought');
const employeeRouter = require('./employee');
const airfareRouter = require('./airfare');
const flightRouter = require('./flight');
const policyRouter = require('./policy');
const offerRouter = require('./offer');
const commonUser = require('./commonUser');



router.get('/',(req , res ,next)=>{
    res.send('admin controller is working fine!')
});

router.use('/aircraft' , aircraftRouter);
router.use('/airport' , airportRouter);
router.use('/address' , addressRouter);
router.use('/route' , routeRouter);
router.use('/employee' , employeeRouter);
router.use('/airfare' , airfareRouter);
router.use('/flight' , flightRouter);
router.use('/policy' , policyRouter);
router.use('/offer' , offerRouter);
router.use('/user' , commonUser);

module.exports = router;