/*!
 * JQL (JSON Query Language)
 * A simple intuitive JSON Query Language inspired by MySQL and jslinq made in javascript.
 * @version    : 0.1.0
 * @author     : DerianAndre
 * @repository : https://github.com/DerianAndre/JQL.git
 * @built      : 23/4/2021
 * @license    : MIT
 */
// JQL - Options
const JQL_LOGGING_ITEMS=    true;
const JQL_LOGGING_COLUMNS=  false;
const JQL_LOGGING_COLLAPSE= true;
const JQL_LOGGING_LIMIT=    false;
// JQL - Operators
const JQL_OP_COMPARE= `\~|\~~|\=|\==|\===|\!=|\!==|\<|\>|\<=|\>=`;
const JQL_OP_LOGICAL= `AND|\&\&|OR|[\|]{2}`;
const JQL_OPERATORS=  `(\\w+) (${JQL_OP_COMPARE}) (\\w+)`;
const JQL_CONDITIONS= `(?:${JQL_OPERATORS})*(${JQL_OP_LOGICAL})*`;

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
			throw new Error("[JQL] Invalid array");

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
		this.first=  first;
		this.last=   last;

		// 💻 Functions: Logging
		// 😉 Debug like a pro!
		this.log=    log;
		this.table=  table;
		this.dir=    dir;
		
		// ✅ Return for chaining
		return this;
	}

	//#region 🧰 Utilities
	// Splitter
	//
	function splitter(string) {
		if(typeof string === 'string') {
			if(string.split(/[\s,]+/))
				return string.split(/[\s,]+/);
			else
				return [string];
		}
		return string;
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
		let matches = [],
				regexMatch,
				regexConditions = new RegExp(JQL_CONDITIONS, 'gm');
		while (regexMatch = regexConditions.exec(expression)) {
			// This is necessary to avoid infinite loops with zero-width matches
			if (regexMatch.index === regexConditions.lastIndex) {
				regexConditions.lastIndex++;
			}
			// The result can be accessed through the matches
			if(regexMatch[0]) {
				matches.push(regexMatch[0]);
			}
		}
		
		// If we only have one expression
		if(matches.length == 1) {
			return condition(matches, element);
		}

		// Push to booleans array
		let booleans = [],
				regexLogic = new RegExp(JQL_OP_LOGICAL, 'gm');
		for (let i = 0; i < matches.length; i++) {
			// Just compare expressions not logical operators
			if(!regexLogic.exec(matches[i])) {
				booleans.push(condition(matches[i], element));
			}
		}

		// Condition must be 3 elements (A OP B)
		if(matches.length % 2 == 0)
			throw new Error(`[JQL] expression "${expression}" is invalid`);
		switch (matches[1]) {
			// AND
			case '&&': case 'AND':
				if(booleans.includes(false))
					return false;
				else
					return true;
			break;
			// OR
			case '||': case 'OR':
				if(booleans.includes(true))
					return true;
				else
					return false;
			// Default
			default: return false;
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
			throw new Error("[JQL] .select() is invalid");

		//Define output array
		var result = [],
				item = {},
				itemData = {};

		// Make array if it's a string
		expression = splitter(expression);

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
		if (!expression) throw new Error("[JQL] .where() Is invalid");

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

	// First
	// Return first element of array as a new JQL or the item itself, null if there is no data.
	function first(items = true) {
		if (this.length === 0)
			return null;
		if(items)
			return this.items[0];
		else
			return new JQL([this.items[0]]);
	}

	// Last
	// Return last element of array as a new JQL or the item itself, null if there is no data.
	function last(items = true) {
		if (this.length === 0)
			return null;
		if(items)
			return this.items[this.length - 1];
		else
			return new JQL([this.items[this.length - 1]]);
	}
	//#endregion

	//#region 📖 Functions: Logging

	function logger(collapse, title, limit, jql, content) {
		// Data
		let style = "line-height: 1; padding: 10px 20px; font-size: 13px; color: white; background: #10151E url(https://derianandre.com/assets/projects/JQL/JQL-white.svg) no-repeat; background-position: 95% center; background-size: auto 12px;	border-radius: 15px;";
		title = `%c[JQL] ${title} (${typeof limit === 'number' ? limit : jql.length} / ${jql.length})\t\t`;

		// Collapse
		if(collapse) {
			console.groupCollapsed(title, style);
		} else {
			console.group(title, style);
		}
		content();
		console.groupEnd();

		// ✅ Return
		return;
	}

	// Dir
	// console.dir() for items
	function dir(args = {
		collapse: JQL_LOGGING_COLLAPSE,
		limit:    JQL_LOGGING_LIMIT,
		items:    JQL_LOGGING_ITEMS,
		options:  false
	}) {
		// Arguments
		let collapse= args.collapse,
				items=    args.items,
				limit=    args.limit,
				options=  args.options,
				title =  `Dir  `,
				log;
		
		// Console info
		if(typeof items === 'boolean' && items) {
			log = this.limit(limit).items;
		} else {
			log = this;
		}

		// Log
		logger(collapse, title, limit, this, () => {
			console.dir(log, options) 
		});

		// ✅ Return
		return;
	}

	// Log
	// console.log() for constructor
	function log(args = {
		collapse: JQL_LOGGING_COLLAPSE,
		limit:    JQL_LOGGING_LIMIT,
		items:    JQL_LOGGING_ITEMS
	}) {
		// Arguments
		let collapse= args.collapse,
		    items=    args.items,
		    limit=    args.limit,
		    title=    `Log  `,
				log;

		// Console info
		if(items) {
			log = this.limit(limit).items;
		} else {
			log = this;
		}

		// Log
		logger(collapse, title, limit, this, () => { 
			console.log(log);
		});

		// ✅ Return
		return;
	}

	// Table
	// console.table() for items
	function table(args = { 
		collapse: JQL_LOGGING_COLLAPSE,
		columns: JQL_LOGGING_COLUMNS,
		limit: JQL_LOGGING_LIMIT
	}) {
		// Arguments
		let collapse= args.collapse,
		    columns=  splitter(args.columns),
		    limit=    args.limit,
		    title=    `Table`;

		// Log
		logger(collapse, title, limit, this, () => { 
			console.table(this.limit(limit).items, columns);
		});

		// ✅ Return
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