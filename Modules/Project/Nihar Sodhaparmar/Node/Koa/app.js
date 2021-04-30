const Koa = require('koa');
const Router = require('koa-router');
const render = require('koa-ejs');
const path = require('path');

const port = 3000;
const app = new Koa();
const router = new Router();
app.use(router.routes()).use(router.allowedMethods());

render(app, {
    root: path.join(__dirname, "views"),
    layout: "template",
    viewExt: "html",
    cache: false,
    debug: true,
    async: true
});

const users = [ 'Nihar', 'Kumar', 'Ronak'];

router.get('/users', async (ctx) => {
    await ctx.render('index', {
        users:users
    });
})

router.get('/', (ctx) => {
    ctx.body = 'Nihar';
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})