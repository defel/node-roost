function error(args) {
	if (Array.isArray(args)) {
		return new Error(args.join(' '));
	} else {
		return new Error(Array.prototype.slice.call(arguments).join(' '));
	}
}

// ---

function quote(input) {
	return JSON.stringify(input);
}

// ---

exports.error = error;
exports.quote = quote;

// ---

exports.e = error;
exports.q = quote;
