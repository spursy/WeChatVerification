const log = require('../../common/log');
const config = require('../config');
const Router = require('koa-router');
const router = new Router();

module.exports = function(app) {
    router.get('/api/login/login',  function(ctx, next) {
        ctx.body = 'Hello World';
    })
    
    router.post('/api/login/logout',  function(ctx, next) {
        ctx.body = 'Hello World';
    })

    router.get('/api/login/qrcode', function(ctx, next) {
        const TAG = log.TAG(ctx.request);
        log.info(TAG, ctx.request);
    })

    app.use(router.routes());
    app.use(router.allowedMethods());
}