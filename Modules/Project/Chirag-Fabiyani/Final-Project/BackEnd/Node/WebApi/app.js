const express = require('express');
const app = express();
const Controllers = require('./Controllers/Index');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());

app.use('/',Controllers);

app.listen(process.env.port);