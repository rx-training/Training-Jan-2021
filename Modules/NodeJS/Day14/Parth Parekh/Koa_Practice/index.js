const Koa = require("koa");
const route = require("koa-route");
const bodyparser = require("koa-bodyparser");
const json = require("koa-json");
const app = new Koa();

//Json Prettier Middleware
app.use(json());
app.use(bodyparser());

//Simple Middlewre Example
// app.use(async (ctx) => {
//     ctx.body = "<h1>Hello World</h1>";
//     console.log(ctx);
// });

//Simple CRUD Example in Koa.js Framewrok

const student = [
    { Id: 1, name: "Parth", Gender: "Male", Age: 21 },
    { Id: 2, name: "Kriti", Gender: "FeMale", Age: 19 },
    { Id: 3, name: "Sanon", Gender: "Male", Age: 41 },
    { Id: 4, name: "John", Gender: "Male", Age: 48 },
];

const studentList = async (ctx) => {
    ctx.body = student;
    
};

const show = async (ctx, id) => {
    const data = student.find((c) => c.Id == id);
    if (!data) {
        console.log(ctx);
        console.log(ctx.request.URL); //Get WHATWG parsed URL object.

        ctx.body = '<h3 style = "color : red;"> Student Data not found</h3>';
    } else {
        ctx.body = data;
    }
};

const add = async (ctx) => {
    const data = ctx.request.body;
    console.log(data);
    student.push(data);
    ctx.body = "Inserted successfully";
};

const edit = async (ctx, id) => {
    const StudentData = student.find((c) => c.Id == id);

    if (!StudentData) {
        return (ctx.body =' Student Data not found');
    } else {
        const data = ctx.request.body;

        for (let i = 0; i < student.length; i++) {
            if (student[i].Id == id) {
                student[i].name = data.name;
                student[i].Age = data.Age;
                return (ctx.body = "Edit Data Successfully");
            }
        }
    }
};

const remove = async (ctx, id ,rid) => {
    const StudentData = student.find((c) => c.Id == id);
    console.log(rid);
    if (!StudentData) {
        return (ctx.body = "Enter Student Id Not Found");
    } else {
        for (let i = 0; i < student.length; i++) {
            if (student[i].Id == id) {
                student.splice(i, 1);
                return (ctx.body = "Student Data Delete Successfully");
            }
        }
    }
};

// route middleware


app.use(route.get("/students", studentList));
app.use(route.get("/students/:id", show));
app.use(route.post("/students/add", add));
app.use(route.put("/students/edit/:id", edit));
app.use(route.delete("/students/delete/:id", remove));

module.exports = app.listen(3000, () => {
    console.log("Server Running");
});


