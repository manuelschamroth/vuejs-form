'use strict';

function VueForm(input) {
  	if (input !== undefined && !Array.isArray(input) && typeof input !== 'object') {
    	this.data = [input];
  	} else if (input instanceof this.constructor) {
    	this.data = input.all();
  	} else {
    	this.data = input || {};
  	}
}

VueForm.prototype.anyFilled = require('./methods/anyFilled');
VueForm.prototype.all = require('./methods/all');
VueForm.prototype.boolean = require('./methods/boolean');
VueForm.prototype.empty = require('./methods/empty');
VueForm.prototype.except = require('./methods/except');
VueForm.prototype.extend = require('./methods/extend');
VueForm.prototype.fill = require('./methods/fill');
VueForm.prototype.filled = require('./methods/filled');
VueForm.prototype.forget = require('./methods/forget');
VueForm.prototype.has = require('./methods/has');
VueForm.prototype.hasAny = require('./methods/hasAny');
VueForm.prototype.input = require('./methods/input');
VueForm.prototype.keys = require('./methods/keys');
VueForm.prototype.make = require('./methods/make');
VueForm.prototype.missing = require('./methods/missing');
VueForm.prototype.only = require('./methods/only');
VueForm.prototype.set = require('./methods/set');
VueForm.prototype.toArray = require('./methods/toArray');
VueForm.prototype.wrap = require('./methods/wrap');
VueForm.prototype.macro = require('./methods/macro');
VueForm.prototype.proxy = require('./methods/proxy');
VueForm.prototype.build = require('./methods/build');
VueForm.prototype.use = require('./methods/use');

const form = (data = {}, validatable) => {
	if (typeof validatable === "undefined") {
		return (new VueForm(data)).proxy();
	}
	else if (typeof validatable === 'function') {
		return (new VueForm(data)).use(validatable, {}).proxy();
	}
	else if (typeof validatable !== 'function' && typeof validatable !== "undefined") {
		console.error(`form(data, validatable): validatable must be an instance of vuejs-validators: See vuejs-form Docs`);
		console.log(`vuejs-form has a powerful, optional, validation library. vuejs-validators`);
		console.log(`vuejs-validators exports a validator function`);
		console.log('vuejs-validators docs: https://github.com/zhorton34/vuejs-validators');
		console.log('vuejs-forms docs: https://github.com/zhorton34/vuejs-form');
		console.log(
			'If you are trying make your vuejs-form "validatable": ',
			'1: Install vuejs-validators',
			'2: Pass in vuejs-validators "validation" instance as the 2nd parameter to vuejs-form (Ex: "form(data, validator)")'
		);
		console.log("-----------------");
		console.log(
			'To create a vuejs-form that is NOT "validatable" simply:',
			'1: Omit the second parameter',
			'2: Non Validatable Form Example: form({ name: "sarah", email: "sarah.smith@gmail.com" })',
		);
	}

	return (new VueForm(data)).proxy();
};

module.exports = form;
module.exports.form = form;
module.exports.default = form;
module.exports.VueForm = VueForm;
