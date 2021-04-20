/*!
 * JQL (JSON Query Language)
 * A simple intuitive JSON Query Language inspired by MySQL and jslinq made in javascript.
 * @version    : 0.1.0
 * @author     : DerianAndre
 * @repository : https://github.com/DerianAndre/JQL.git
 * @built      : 19/4/2021
 * @license    : MIT
 */
// JQL - Options
const JQL_LOGGING_LIMIT = 10;
// JQL - Operators
const JQL_OPERATORS  = `(\\w+) (\~|\~~|\=|\==|\===|\!=|\!==|\<|\>|\<=|\>=) (\\w+)`;
const JQL_CONDITIONS = `(?:${JQL_OPERATORS})*(\&&|\||)*`;

//UMD - Universal Module Definition
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.JQL = factory();
	}
} (this, function () {
	// Constructor
	function JQL(array) {
		//Check arguments
		if (!array || !(array instanceof Array))
			throw new Error("JQL: Invalid array");

		// 📄 Data
		// 🙄 Very straight forward, duh
		this.items = array;
		this.length = array.length;

		// 🔍 Functions: Query
		// ✨ The magic it's here! 
		this.select= select;
		this.where=  where;
		this.limit=  limit;
		// 📉 Functions: Data
		// 😪 Yes I know. I like it this way because if forget things...
		this.array=  data;
		this.data=   data;
		this.result= data;
		this.count=  count;

		// 💻 Functions: Logging
		// 😉 Debug like a pro!
		this.log=    log;
		this.table=  table;
		this.dir=    dir;
		
		// ✅ Return for chaining
		return this;
	}

	//#region 🧰 Utilities
	function logger(title, info, content) {
		console.group(
			`%c[JQL] ${title} – ${info}`,
			'padding: 7px 20px; font-size: 13px; color: white; background: #111; background: linear-gradient(90deg, #E58E03 2.5%, #111 2.5%, #111 97.5%, #E58E03 97.5%);'
		);
			content();
		console.groupEnd();
		return;
	}
	// Condition
	// Return true or false depeding on the expression and operator
	function condition(expression, element) {
		let m, matches = [];
		const	regex = new RegExp(JQL_OPERATORS, 'gm');
		while ((m = regex.exec(expression)) !== null) {
			// This is necessary to avoid infinite loops with zero-width matches
			if (m.index === regex.lastIndex) {
				regex.lastIndex++;
			}			
			// The result can be accessed through the matches
			m.forEach((match, groupIndex) => {
				matches[groupIndex] = match;
			});
		}
		// Set key, value and operator
		let 
			key 	= matches[1],
			op  	= matches[2],
			value = matches[3];
		// Return false if we don't have a match
		if(!key || !op || !value) return false;
		// Check the value to convert it to the right type
		if(value == 'null')					value = null;
		if(value == 'true')					value = true;
		if(value == 'false')				value = false;
		if(/^\d+$/.test(value)) 		value = parseInt(value);
		if(/^\d.\d+$/.test(value)) 	value = parseFloat(value);
		// Check for operators
		switch (op) {
			case '~':		return (element[key].includes(value));
			case '=':
			case '==':	return (element[key] ==  value);
			case '===':	return (element[key] === value);
			case '!=':	return (element[key] !=  value);
			case '!==':	return (element[key] !== value);
			case '<':		return (element[key] <  value);
			case '<=':	return (element[key] <= value);
			case '>':		return (element[key] >  value);
			case '>=':	return (element[key] >= value);
			default:		return false;
		}
	}

	// Compare
	// Compare an expression by a query string (&& ||)
	function compare(expression, element) {
		if( (!expression && typeof expression !== 'string') || !element )
			return false;

		// Get matches
		let regexMatch, matches = [];
		const	regex = new RegExp(JQL_CONDITIONS, 'gm');
		while (regexMatch = regex.exec(expression)) {
			// This is necessary to avoid infinite loops with zero-width matches
			if (regexMatch.index === regex.lastIndex) {
				regex.lastIndex++;
			}
			// The result can be accessed through the matches
			if(regexMatch[0]) {
				matches.push(regexMatch[0]);
			}
		}

		// Push to booleans array
		let booleans = [];
		for (let i = 0; i < matches.length; i++) {
			const item = matches[i];
			if(item.length > 2) {
				booleans.push(condition(item, element));
			}
		}

		// Check conditional operators
		if(matches.includes('&&')) {
			if(booleans.includes(false)) {
				return false;
			} else {
				return true;
			}
		} else {
			if(booleans.includes(true)) {
				return true;
			} else {
				return false;
			}
		}
	}
	//#endregion

	//#region 🔍 Functions: Query
	// Select
	// Select keys (Equivalent to SELECT <args> FROM)
	function select(expression) {
		// Check arguments
		if( !expression || expression === '*')
			return new JQL(this.items);
		if( expression && !( typeof expression === 'string' || typeof expression === 'array' ) ) 
			throw new Error("JQL: .select() is invalid");

		//Define output array
		var result = [],
				item = {},
				itemData = {};

		// Make array if
		if(typeof expression === 'string') {
			if(expression.split(/[\s,]+/)) {
				expression = expression.split(/[\s,]+/);
			} else {
				expression = [expression];
			}
		}

		// Loop trough
		for (let i = 0, j = 0; i < this.items.length; i++) {
			//For each element on data
			let keys = this.items[i];
			for (let e = 0; e < expression.length; e++) {
				//Use function to obtain match
				for(let key in keys) {
					// Key is the same as the expression element
					if(key == expression[e]) {
						itemData[key] = this.items[i][key];
						item[j] = {...itemData};
					}
				}
				// If expression match add it to the result
				if(e == expression.length-1) {
					result[j] = item[j];
					j++;
				}
			}
		}

		// Return for chaining
		return new JQL(result);
	}

	// Where
	// Select elements that match expression by a qery string or a function
	function where(expression) {
		// Check arguments
		if (!expression) throw new Error("JQL: .where() Is invalid");

		//For each element on data
		var result = [];
		for (var i = 0; i < this.items.length; i++) {
			//Use function to obtain match
			if(typeof expression === 'string') {
				var match = compare(expression, this.items[i]);
			} else {
				var match = expression(this.items[i]);
			}
			//If element match, append
			if (match)
				result.push(this.items[i]);
		}

		//Return for chaining
		return new JQL(result);
	}

	// Limit
	// Get a certain number of items
	function limit(value = false) {
		//Check arguments
		if ( value == false || value == null )
			return new JQL(this.items);
		if ( value && value < 0 )
			throw new Error("Value must be greater or equals zero");
			
		//Copy array in order to avoid modifications on original
		var result = [];
		for( var i = 0; i < this.items.length; i++ ){
			result.push(this.items[i]);
		}

		//Slice source array
		var limit = result.slice(0, value);
			
		//Return for chaining
		return new JQL(limit);
	}
	//#endregion

	//#region 📉 Functions: Data
	// Data
	// Returns data
	function data() {
		return this.items;
	}

	// Count
	// Returns length of the array
	function count() {
		return this.length;
	}
	//#endregion

	//#region 📖 Functions: Logging
	// Dir
	// console.dir() for items
	function dir(args = {}) {
		// Arguments
		args.items=   ( typeof args.items !== 'undefined')   ? args.items   : true;
		args.limit=   ( typeof args.limit !== 'undefined')   ? args.limit   : JQL_LOGGING_LIMIT;
		args.options= ( typeof args.options !== 'undefined') ? args.options : false;
		let title = 'Dir', info, limit, log;
		// Console
		if(typeof args.items === 'boolean' && args.items) {
			limit = (args.limit < this.length) ? args.limit : this.length;
			info = `Showing: ${limit} of ${this.length} elements`;
			log = this.limit(args.limit).items;
		} else {
			info = `Constructor`;
			log = this;
		}
		logger(title, info, () => { 
			console.dir(log, args.options) 
		});
		// Return
		return;
	}

	// Log
	// console.log() for constructor
	function log(args = {}) {
		// Arguments
		args.items= ( typeof args.items !== 'undefined') ? args.items : true;
		args.limit= ( typeof args.limit !== 'undefined') ? args.limit : JQL_LOGGING_LIMIT;
		let title = 'Log', info, limit, log;
		// Console
		if(typeof args.items === 'boolean' && args.items) {
			limit = (args.limit < this.length) ? args.limit : this.length;
			info = `Showing: ${limit} of ${this.length} elements`;
			log = this.limit(args.limit).items;
		} else {
			info = `Constructor`;
			log = this;
		}
		logger(title, info, () => { 
			console.log(log);
		});
		// Return
		return;
	}

	// Table
	// console.table() for items
	function table(args = {}) {
		// Arguments
		args.columns= ( typeof args.columns !== 'undefined') ? args.columns : false;
		args.limit=   ( typeof args.limit !== 'undefined')   ? args.limit   : JQL_LOGGING_LIMIT;
		// Console
		let limit = (args.limit < this.length) ? args.limit : this.length,
				title = 'Table',
				info  = `Showing: ${limit} of ${this.length} elements`;
		logger(title, info, () => { 
			console.table(this.limit(args.limit).items, args.columns);
		});
		// Return
		return;
	}
	//#endregion

	// ✅ Constructor
	function constructor(array) {
		return new JQL(array);
	}

	// ✅ Exports functions
	return constructor;
}));