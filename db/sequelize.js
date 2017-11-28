'use strict'

var Sequelize = require('sequelize');
var db = {
    init : new Sequelize('survey_db', 'root', '_Pass7899', {
        host: '192.168.85.2',
        dialect: 'mysql',
        timezone: '+08:00',
        pool: {
            max: 150,
            min: 5,
            idle: 10000
        },
        'define': {
            'underscored': true
        },
        logging:false
    })
};
// import table
db.SeniorSurvey = db.init.import('../model/senior_survey.js');
module.exports = db;