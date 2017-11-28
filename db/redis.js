/**
 * Created by huping on 2017/2/8.
 */
var Promise = require("bluebird");
var redis = Promise.promisifyAll(require("redis"));
var logger = require(process.cwd()+'/common/logger');
var conf = {
    port: 8888,
    debug: false,
    dbPort: 6379,
    dbHost: '127.0.0.1',
    dbOptions: {}
};
var key = {
    REDIS_KEY_LOGIN_TOKEN:"WeChat-Verification-Token",
}

var client = redis.createClient(conf.dbPort,conf.dbHost);
client.get = async(key) => {
    var result = await this.get(key);
    return result;
}
client.getJson = async(key) => {
    var result = await this.get(key);
    return result?JSON.parse(result):undefined;
}
client.set = async(key, value, expire) => {
    var result = await this.set(key, value, expire);
    if (expire > 0) {
        this.expire(key, expire);
    } 
    return result;
}
client.setJson = async(key, value, expire) => {
    var result = await this.set(key, JSON.stringify(value), expire);
    if (expire > 0) {
        this.expire(key. expire);
    }
    return result;
}

module.exports = {
    client:client,
    key:key
};