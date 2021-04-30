const Koa = require('koa');
const Router = require('koa-router');
const json = require('koa-json');
const render = require('koa-ejs');
const path = require('path');
const bodyParser = require('koa-bodyparser');

const port = 3000;
const app = new Koa();
const router = new Router();

// json prettier middleware
app.use(json());
// bodyparser middleware
app.use(bodyParser());

render(app, {
    root: path.join(__dirname, "views"),
    layout: "template",
    viewExt: "html",
    cache: false,
    debug: true,
    async: true
});

var things = ['My Family', 'Programming'];

// Index
router.get('/', index);
router.get('/add', showAdd);
router.post('/add', add);

// List of things
async function index(ctx){
    await ctx.render('index', {
        title: 'Things I Love:',
        things: things
    })
}

// show add page
async function showAdd(ctx){
    await ctx.render('add');
}

// add thing
async function add(ctx){
    const body = ctx.request.body;
    things.push(body.thing);
    ctx.redirect('/');
}

// router middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});