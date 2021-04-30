const express = require('express');
const app = express();

app.use('/',Controllers);

app.listen(3000);