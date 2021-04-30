const koa = require('koa')
const koaRouter = require('koa-router')
const json = require('koa-json')
const koaBody = require('koa-body')
const app = new koa()
var router = koaRouter()
app.use(koaBody())
app.use(json())
var customerData = [
    {   
        id : 1,
        firstname : 'smit',
        lastName : "vadhiya",
        address : "address",
        phonenumber : 556541237,
    },{
        id : 2,
        firstname : 'vishal',
        lastName : "shah",
        address : "address",
        phonenumber : 345345345346,
    },
    {
        id : 3,
        firstname : 'vivek',
        lastName : "modi",
        address : "address",
        phonenumber : 345355,
    },
    {
        id : 4,
        firstname : 'amit',
        lastName : "shah",
        address : "address",
        phonenumber : 556343437,
    }
]

function getAllData(ctx){
    ctx.body = customerData
}
function getById(ctx){
    const id = ctx.params.id
    const data = customerData.find((c) => c.id == id)
    if(!data) return ctx.body= "not found"
    ctx.body = data
}
function updateById(ctx){
    const id = ctx.params.id
    const data = customerData.find((c) => c.id == id)
    if(!data) return ctx.body= "not found"
    const newData = ctx.request.body
    console.log(newData);
    for(var i in newData){
        data[i] = newData[i]
    }
    ctx.body = data

}

function addNewData(ctx){
    
}

router.get('/all',getAllData)
router.get('/:id',getById)
router.put('/:id',updateById)
router.post('/:id',addNewData)


app.use(router.routes())
app.listen(3000,() => console.log("3000"))