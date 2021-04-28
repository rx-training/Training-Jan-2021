const Koa = require("koa");
var route = require("koa-route");
var bodyparser = require("koa-bodyparser");
var json = require("koa-json");
const app = new Koa();
const port = 3000;

app.use(json());
app.use(bodyparser());

var customers = [
  { id: 1, name: "Abc", address: "Ahmedabad" },
  { id: 2, name: "Def", address: "Surat" },
  { id: 3, name: "Ghi", address: "Vadodara" },
];

//to get all customers
const list = async (ctx) => {
  ctx.body = customers;
};

//to get by id
const show = async (ctx, id) => {
  const result = customers.find((c) => c.id == id);
  if (!result) ctx.throw(404, `Invalid customer id ${id}`);
  ctx.body = result;
};

//to add new customer
const add = async (ctx) => {
  //body will be in the for of {"name":"abc","address":"xyz"}
  const data = ctx.request.body;
  let custId = customers.length + 1;
  let custData = {
    id: custId,
    name: data.name,
    address: data.address,
  };
  customers.push(custData);
  ctx.body = customers;
};

//to update customer data
const edit = async (ctx, id) => {
  let custId = id;
  /* body will be in form of { "name": "abc", "address": "gujarat"} */
  const data = ctx.request.body;
  let result = customers.find((c) => c.id == custId);

  if (result) {
    for (let i = 0; i < customers.length; i++) {
      if (custId == customers[i].id) {
        customers[i].name = data.name;
        customers[i].address = data.address;
        ctx.body = customers;
        break;
      }
    }
  } else {
    ctx.throw(404, `Invalid customer id ${custId}`);
  }
};

//to delete customer data
const remove = (ctx, id) => {
  let custId = id;

  let result = customers.find((c) => c.id == custId);
  let index = customers.indexOf(result);

  if (index > -1) {
    customers.splice(index, 1);
    ctx.body = customers;
  } else {
    ctx.throw(404, `Invalid customer id ${custId}`);
  }
};

app.use(route.get("/customers", list));
app.use(route.post("/customers", add));
app.use(route.get("/customers/:id", show));
app.use(route.delete("/customers/:id", remove));
app.use(route.put("/customers/:id", edit));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
