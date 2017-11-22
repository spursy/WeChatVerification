const Koa = require('koa');
const app = new Koa();
const config = require('./server/config');
const log = require('./common/log');
const favicon = require('koa-favicon');
// const koa_static = require('koa-static-server');
const koa_static = require('koa-static');


process.title = '微信验证';

//add static file
app.use(koa_static(__dirname+'/node_modules'));
app.use(koa_static(__dirname+'/web'));
app.use(favicon('/image/me.png'));

app.listen(config.PORT);
var TAG = log.TAG();
log.info(TAG, `server list on port ${config.PORT}`);

