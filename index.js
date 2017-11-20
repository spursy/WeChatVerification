const Koa = require('koa');
const app = new Koa();
const config = require('./server/config');
const log = require('./common/log');

// response
app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(config.PORT);
var TAG = log.TAG();
log.info(TAG, `server list on port ${config.PORT}`);
