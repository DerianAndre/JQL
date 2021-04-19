/*!
 * JQL
 * A simple intuitive JSON Query Language inspired by MySQL and jslinq made in javascript.
 * @version    : 0.1.0
 * @author     : DerianAndre
 * @repository : https://github.com/DerianAndre/JQL.git
 * @built      : 18/4/2021
 * @license    : MIT
 */
(function (root, factory) {
	//UMD - Universal Module Definition
	if (typeof define === 'function' && define.amd) {
		//AMD: register as an anonymous module without dependencies
		define([], factory);
	} else if (typeof exports === 'object') {
		//Node: does not work with strict CommonJS, but only CommonJS-like 
		//environments that support module.exports, like Node.
		module.exports = factory();
	} else {
		//Browser: globals (root is window)
		root.JQL = factory();
	}
} (this, function () {
	// Valid Operators
	const OPERATORS = [
		'~', '~~',
		'=', '==', '===',
		'!=', '!==',
		'<', '>', 
		'<=', '>=',
	];
	// Valid Conditions
	const CONDITIONS = [
		'&&', '||'
	];
	// Make them regex ready
	const OPS = OPERATORS.map(function(op) { return '\\' + op; }).join('|');
	const CDS = CONDITIONS.map(function(op) { return '\\' + op; }).join('|');
	const regexOPS = `(\\w+) (${OPS}) (\\w+)`;

	// Constructor
	function JQL(array) {
		//Check arguments
		if (!array || !(array instanceof Array))
			throw new Error("JQL: Data is invalid or is not a valid array");

		// 📄 Data
		// 🙄 Very straight forward, duh
		this.items = array;
		this.length = array.length;

		// 🔍 Functions: Query
		// ✨ The magic it's here! 
		this.select=  select;
		this.where=   where;

		// 📉 Functions: Data
		// 😪 Yes I know. I like it this way because if forget things...
		this.data=   data;
		this.array=  data;
		this.result= data;
		this.count=  count;

		// 💻 Functions: Logging
		// 😉 Debug like a pro!
		this.log=   log;
		this.table= table;
		this.dir=   dir;
		
		// ✅ Return for chaining
		return this;
	}

	//#region 🧰 Utilities
	// Condition
	// Return true or false depeding on the expression and operator
	function condition(expression, element) {
		let m, matches = [];
		const	regex = new RegExp(regexOPS, 'gm');
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

		if(!key || !op || !value) return false;
		if(value == 'true')  value = true;
		if(value == 'false') value = false;
		if(/^\d+$/.test(value)) value = parseInt(value);

		switch (op) {
			//
			case '~':
				return (element[key].includes(value));
			break;
			//
			case '=': case '==':
				return (element[key] == value);
			break;
			//
			case '===':
				return (element[key] === value);
			break;
			//
			case '!=':
				return (element[key] != value);
			break;
			//
			case '!==':
				return (element[key] !== value);
			break;
			//
			case '<':
				return (element[key] < value);
			break;
			//
			case '<=':
				return (element[key] <= value);
			break;
			//
			case '>':
				return (element[key] > value);
			break;
			//
			case '>=':
				return (element[key] >= value);
			break;
			//
			default: return false;
		}
	}

	// Compare
	// Compare an expression by a query string
	function compare(expression, element) {
		if( (!expression && typeof expression !== 'string') || !element ) return false;

		let m, matches = [];
		
		const	regex = new RegExp(`(?:${regexOPS})*(${CDS})*`, 'gm');

		// Get matches
		while (m = regex.exec(expression)) {
			// This is necessary to avoid infinite loops with zero-width matches
			if (m.index === regex.lastIndex) {
				regex.lastIndex++;
			}
			
			// The result can be accessed through the matches
			if(m[0]) {
				matches.push(m[0]);
			}
		}

		let booleans = [];
		for (let i = 0; i < matches.length; i++) {
			const item = matches[i];
			if(item.length > 2) {				
				let result = condition(item, element);
				booleans.push(result);
			}
		}
		
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
					if(key == expression[e]) {
						//console.log(this.items[i][key]);
						itemData[key] = this.items[i][key];
						item[j] = {...itemData};
					}
				}

				if(e == expression.length-1) {
					result[j] = item[j];
					j++;
				}
				
				//if(typeof expression === 'string') {
				//	var match = compare(expression, this.items[i]);
				//} else {
				//	var match = expression(this.items[i]);
				//}
				//If element match, append
			}
		}

		// Return for chaining
		return new JQL(result);
	}

	// Where: Select elements that match expression by a qery string or a function
	function where(expression) {
		// Check arguments
		if (!expression) throw new Error("WHERE: Is invalid");
		//Define output array
		var result = [];

		//For each element on data
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
	function dir(object = false) {
		console.dir(this.items, object);
		return;
	}

	// Log
	// console.log() for constructor
	function log(items = true) {
		if(typeof items === 'boolean' && items) console.log(this.items);
		else console.log(this);
		return;
	}

	// Table
	// console.table() for items
	function table(columns = false) {
		console.table(this.items, columns);
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