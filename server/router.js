const log = require('../common/log');
const config = require('./config');

module.exports = function(app) {
    require('./api/login')(app);
};


