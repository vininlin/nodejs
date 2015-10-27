/**
 * Created by weining on 2015/10/15 0015.
 */

var log4js = require('log4js');

log4js.configure({
    appenders: [
        {
            type: 'console'
        },
        {
            type: 'dateFile',
            filename: 'logs/express.log',
            pattern: '_yyyy-MM-dd',
            alwaysIncludePattern: false,
            category: 'dateFileLog'
        }
    ],
    replaceConsole: true,
    levels:{
        dateFileLog: 'INFO'
    }
});

var dateFileLog = log4js.getLogger('dateFileLog');
dateFileLog.debug('heelo');
exports.logger = dateFileLog;

exports.use = function(app){
    app.use(log4js.connectLogger(dateFileLog,{level:'debug',format:':method :url'}));
}