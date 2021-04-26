const express = require('express');
// const app = express();
const fs = require('fs');
const router = express.Router();
app.use(express.json());
const mainRouter = require('./employee');

router.use('/employee', mainRouter);
//


module.exports = router;