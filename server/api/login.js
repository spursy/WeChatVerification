const log = require('../../common/log');
const config = require('../config');
const Router = require('koa-router');
const router = new Router({
    prefix: '/api/login'
});

module.exports = function(app) {
    router.get('/login',  function(ctx, next) {
        ctx.body = 'Hello World';
    })
    
    router.post('/logout',  function(ctx, next) {
        ctx.body = 'Hello World';
    })

    router.get('/qrcode', function(ctx, next) {
        var TAG = log.TAG(ctx.request);
        log.info(TAG, ctx.request.query);
        ctx.body = 'Hello World';
        ctx.render({qrcode: "1231"})
    })

    app.use(router.routes());
    app.use(router.allowedMethods());
}