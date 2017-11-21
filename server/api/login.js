const Koa = require('koa');
const app = new Koa();
const config = require('../config');
const log = require('../../common/log');

app.get('/qrcode', function (req, res) {
    log.info(">>>>>>>Success!");
})

