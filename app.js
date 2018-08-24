
//context对象

const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()


let main = (ctx) => {
    console.log(ctx, 'wwwwwwwwwwwwwwwwww')
    let _html = '404 NotFound'
    switch (ctx.url) {
        case '/':
            _html = '<h1>Index</h1>';
            break;
        case '/about':
            _html = '<h1>About</h1>';
            break;
        case '/hello':
            _html = '<h1>world</h1>';
            break;
        default:
            break;
    }
    ctx.body = _html;
}
let responseInfo = (ctx) => {
    console.log(ctx.accepts(), 'ddddd')
    switch (ctx.accepts()) {
        case 'xml':
            ctx.type = xml;
            ctx.body = '<data>Hello World</data>';
            break;
        case 'json':
            ctx.type = json;
            ctx.body = '{data:"hello world"}'
            break;
        case 'html':
            ctx.type = html;
            ctx.body = '<p>hello world</p>'
            break;
        default:
            ctx.type = 'application/xml';
            ctx.body = '<data>Hello World</data>'
            break;
    }

}
router.get('/', (ctx) => {
let html  =  ` <ul> <li><a href="/hello">helloworld</a></li> <li><a href="/about">about</a></li> </ul> ` 
ctx.body  =  html 
}).get('/hello', (ctx)  =>  { 
ctx.body  =  'helloworld' 
}).get('/about', (ctx)  =>  { 
ctx.body  =  'about' 
}) 


// app.use(main)
// app.use(responseInfo)
app.use(router.routes(), router.allowedMethods())


app.listen(3001)