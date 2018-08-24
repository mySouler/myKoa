const Koa = require('koa')

const app = new Koa();


app.use( async (ctx)=>{
    let url = ctx.url
    let request = ctx.request
    let query = ctx.request.query
    let querystring = ctx.request.querystring
    let ctx_query = ctx.query
    let ctx_querysting = ctx.querystring 
    ctx.body = {
        url,
        request,
        query,
        querystring,
        ctx_query,
        ctx_querysting
    }
})
app.listen('3002')