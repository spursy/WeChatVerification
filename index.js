const Koa = require('koa');
const app = new Koa();
const config = require('./server/config');
const log = require('./common/log');
const favicon = require('koa-favicon');
const koa_static = require('koa-static-server');

process.title = '微信验证';

app.use(koa_static({rootDir: __dirname + '/web', rootPath: '/admin'}));
app.use(favicon(__dirname + '/web/image/me.png'));

// router
require('./server/router.js')(app);

app.listen(config.PORT);
var TAG = log.TAG();
log.info(TAG, `server list on port ${config.PORT}`);

