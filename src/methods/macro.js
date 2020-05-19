
'use strict';

/**
 * Add/Extend Form Functionality With Custom Methods Using Macros
 *
 * @param name
 * @param fn
 */
module.exports = function macro(name, fn) {
	if (Object.keys(this.constructor.prototype).includes(name)) {
		return console.error(`Cant extend form with ${name} macro, it already exists (use forceMacro if you want to forcibly overwrite base behavior or previously set macro`);
	}

	this.constructor.prototype[name] = fn;
};
