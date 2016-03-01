var log4js = require('log4js');

log4js.loadAppender('file');
// NOTE: create a log folder and test.log file in root directory like 
log4js.addAppender(log4js.appenders.file('logs/test.log'), 'ankit');

var logger = log4js.getLogger('ankit');

//logger.setLevel('DEBUG');
//logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');