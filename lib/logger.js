var winston = require('winston');

// ---

var transports = [
	new winston.transports.Console({prettyPrint : true})
];

var exceptionHandlers = [
	new winston.transports.Console({prettyPrint : true})
];

// ---

var logger = new winston.Logger({
	transports: transports,
	exceptionHandlers: exceptionHandlers
});

// ---

function setGlobalLevel(level) {
	if (!(typeof(level) == 'string' || level instanceof String)) {
		level = Object.keys(logger.levels).reduce(function (previousValue, currentValue, index, array) {
			if (logger.levels[previousValue] == level) {
				return previousValue;
			} else {
				return currentValue;
			}
		}, logger.level);
	}
	
	logger.level = level;
	
	Object.keys(logger.transports).forEach(function (name) {
		var transport = logger.transports[name];
		
		transport.level = level;
	});
}

// ---

module.exports = logger;
module.exports.setGlobalLevel = setGlobalLevel;
