const Koa = require('koa');
const app = new Koa();
const config = require('./server/config');
const log = require('./common/log');
const favicon = require('koa-favicon');
const koa_static = require('koa-static-server');
process.title = '微信验证';

// response
// app.use(ctx => {
//   ctx.body = 'Hello Koa';
// });
app.use(koa_static({rootDir: __dirname + '/web'}));
app.use(favicon(__dirname + '/web/image/me.png'));

app.use('/api/login', require('./server/api/login'));

app.listen(config.PORT);
var TAG = log.TAG();
log.info(TAG, `server list on port ${config.PORT}`);
