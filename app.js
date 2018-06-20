const Koa = require('koa')
const koaStatic = require('koa-static')
const path = require('path')
const Router = require('koa-router');
const staticPath = './'

const app = new Koa();


app.use(koaStatic(path.join( __dirname,  staticPath)))

app.listen(8081)
