'use strict';

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

//app.use(async (ctx, next) => {
//    ctx.body = "Hao 123";
//    await next();
//    ctx.body = "Hao 456";
//});

router.get('/v1/weather', ctx => {
    ctx.status = 200;
    ctx.body = 'OK';
});

app.use(router.routes());

app.listen(3000);
console.log("server started at 3000");