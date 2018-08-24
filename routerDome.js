const Koa = require('koa')
const fs = require('fs')
const Router = require('koa-router')

const app = new Koa()
const home = new Router()

home.get('/',async (ctx)=>{
    let html = `
        <ul>
        <li><a href="/view/index">/view/index</a></li>
        <li><a href="/view/todo">/view/todo</a></li>
        <li><a href="/view/404">/view/404</a></li>
        </ul>
    `
    ctx.body = html
})
const view = new Router()

view.get('/todo',async (ctx)=>{
    ctx.body = "todo"
})
view.get('/404',async (ctx)=>{
    ctx.body = "404"
})
view.get('/index',async (ctx)=>{
    ctx.body = "index"
})


const router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/view', view.routes(), view.allowedMethods())

app.use(router.routes(),router.allowedMethods())

app.listen(3000)
