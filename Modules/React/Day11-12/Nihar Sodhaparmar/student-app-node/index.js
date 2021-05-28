const express = require("express");
var cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const controllerRouter = require("./controllers/index");
app.use("/", controllerRouter);

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});
