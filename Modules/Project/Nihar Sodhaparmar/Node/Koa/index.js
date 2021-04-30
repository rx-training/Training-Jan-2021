const Koa = require('koa');
const http = require('http');
const https = require('https');
const json = require('koa-json');

const port = 3000;
const app = new Koa();
app.use(json());

app.on('error', err => {
    console.log('server error', err);
});

// app.on('error', (err, ctx) => {
//     console.log('server error', err, ctx)
// });

// logger

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async (ctx, next) => {
    ctx.body = 'Hello World';
    await next();
});

function db() {
    var database = 'mongodb://localhost/playground';
}

app.context.db = db;

app.use(async ctx => {
    console.log(ctx.db);
    //console.log(ctx.request);
    //console.log(ctx.req);
    //console.log(ctx.response);
    //console.log(ctx.res);
    //throw new Error('For checking error.');
    //ctx.throw(400, 'name required');
    ctx.assert(ctx.state.user, 401, 'User not found. Please login!');
});


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

http.createServer(app.callback()).listen(3001, () => {
    console.log(`App listening on port 3001`);
});

https.createServer(app.callback()).listen(3002, () => {
    console.log(`App listening on port 3002`);
});