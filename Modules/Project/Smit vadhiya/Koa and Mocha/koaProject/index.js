const koaRouter = require('koa-router')
const router = koaRouter()

router.get('/hello/:id([0-9]{5})',hello)

function hello(ctx){
    var d = ctx.params
    ctx.body = d
}

router.get('/hello',req)

function req(ctx){
    
    ctx.body = "hello"
}

router.get('/redirect', ctx => {
    ctx.redirect('/hello')
})
module.exports = router