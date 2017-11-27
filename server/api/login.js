const log = require('../../common/log');
const config = require('../config');
const Router = require('koa-router');
const QRCode = require('qrcode');
const guid = require('lite-guid');
const utility = require('../utility/utility.js');
const underscore  = require('underscore');
const Promise = require('promise');
var QRCodeTransform = Promise.denodeify(QRCode.toDataURL);
const router = new Router({
    prefix: '/api/login'
});
var token_list=[];

module.exports = function(app) {
    router.get('/login',  function(ctx, next) {
        ctx.body = 'Hello World';
    })
    
    router.post('/logout', function(ctx, next) {
        ctx.body = 'Hello World';
    })

    router.get('/qrcode', async function(ctx, next) {
        // add log
        var TAG = log.TAG(ctx.request);
        log.info(TAG, ctx.request.query);
        //set guid as token id
        var token = new Buffer(guid.create()).toString("base64");
        var expire = 120;//second
        var now_time =utility.getSecond();
        var item = {
            userid:0,
            token:token,
            expire_time:now_time+expire
        }
        token_list = token_list.filter(function(item){
            "use strict";
            return item.expire_time - now_time >0;
        });
        token_list.push(item);
    
        //generate qrcode
        var url = config.BASE_URL+"/api/login/qrcode/login?token="+token;
        var opts = {
            errorCorrectionLevel: 'H',
            type: 'image/png',
            rendererOpts: {
                quality: 1
            }
        }        
        var qrcode = await QRCodeTransform(url,opts);
        
        ctx.body = {qrcode: qrcode};
    })

    router.get('/check', async (ctx, next) => {
        var TAG = logger.TAG(req);
        if(req.query.token){
            var now_time = utility.getSecond();
            var token = _.find(token_list,function(item){
                "use strict";
                return item.expire_time - now_time >0 && 
                    item.token == ctx.request.token;
            })
            if(token&&token.userid!=0){
                var str = token.userid+"|"+now_time;
                var code = Crypto.encode(str)
                res.send({code:code});
            }else{
                res.send({});
            }
        }else{
            res.send({});
        }
    })

    app.use(router.routes());
    app.use(router.allowedMethods());
}