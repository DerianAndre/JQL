/*!
 * JQL (JSON Query Language)
 * A simple intuitive JSON Query Language inspired by MySQL and jslinq made in javascript.
 * @version    : 0.1.0
 * @author     : DerianAndre
 * @repository : https://github.com/DerianAndre/JQL.git
 * @built      : 25/4/2021
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
const JQL_OPERATORS=  `(\\w+) (${JQL_OP_COMPARE}) (([+-]?([0-9]*[.])?[0-9]+)|\\w+|\'.*\'|\".*\")`;
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
		this.group=  group;

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
	//
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
		// Conver tu null
		if(value == 'null')					value = null;
		// Conver to boolean
		if(value == 'true')					value = true;
		if(value == 'false')				value = false;
		// Conver to integer
		if(/^\d+$/.test(value)) 		value = parseInt(value);
		// Conver to float
		if(/^\d.\d+$/.test(value)) 	value = parseFloat(value);
		// Convert to string
		if(/^(\'.*\'|\".*\")$/.test(value)) 	value = String(value.slice(1,-1));

		//(([+-]?([0-9]*[.])?[0-9]+)|\w+|\".*\")

		// Check for operators
		switch (op) {
			case '~':		return (element[key].toLowerCase().includes(value.toLowerCase()));
			case '~~':	return (element[key].includes(value));
			case '=':
			case '==':	return (element[key] ==  value);
			case '===':	return (element[key] === value);
			case '!=':	return (element[key] !=  value);
			case '!==':	return (element[key] !== value);
			case '<':		return (element[key] <   value);
			case '<=':	return (element[key] <=  value);
			case '>':		return (element[key] >   value);
			case '>=':	return (element[key] >=  value);
			default:		return false;
		}
	}

	// Comparator
	// Compare an expression by a query string (AND or &&, OR or ||)
	function comparator(expression, element) {
		if( (!expression && typeof expression !== 'string') || !element )
			throw new Error("[JQL] Invalid expression");

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

		// Logic
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

	// Equals
	// Verify if first and second element are equals in values
	function equals(first, second){
		// If are the same instance return true
		if (first === second || first == second)
			return true;
			
		// If different type return false
		if (typeof first != typeof second)
			return false;
			
		// If are not objects, check value
		if (typeof first != 'object')
			return first == second;
			
		// For each property on first
		for (let current in first){	
			// Get property value from each element
			let firstValue = first[current];
			let secondValue = second[current];
			// If current is object, invoke "Equals" on each member of the object; otherwise just check values
			let equal = (typeof firstValue === 'object') ? equals(firstValue, secondValue) : firstValue == secondValue;
			//If not equals, exit
			if (!equal)
				return false;
		}

		return true;
	}


	// Logger
	// This will log a collapseable (or not) fancy message in the console
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

	// Splitter
	// This function allows to input a string or an array to work with expressions.
	// 'id, name' or ['id', 'name']
	function splitter(string) {
		if(typeof string === 'string') {
			if(string.split(/[\s,]+/))
				return string.split(/[\s,]+/);
			else
				return [string];
		}
		return string;
	}
	//
	//#endregion

	//#region 🔍 Functions: Query
	//
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
		if (!expression) throw new Error("[JQL] .where() is invalid");

		// For each element on data
		let result = [], match;
		for (let i = 0; i < this.items.length; i++) {
			if(typeof expression === 'string') {
				// Compare as query
				match = comparator(expression, this.items[i]);
			} else {
				// Use function to obtain match
				match = expression(this.items[i]);
			}
			// If element match, append
			if (match) result.push(this.items[i]);
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

	// Group
	// Group items inside array for given string or function
	function group(expression) {
		// Check arguments
		if (!expression)
			throw new Error("[JQL] .group() is invalid");

		//Define output maps
		let result = [];

		//For each element on array
		for (let i = 0; i < this.items.length; i++) {
			// Get group key of current element
			if(typeof expression === 'string') {
				key = this.items[i][expression];
			} else {
				key = expression(this.items[i]);
			}
			// Check if another element with the same key is on maps
			let map = null;
			// For each existing element on maps
			for (let n = 0; n < result.length; n++) {
				// If we have element with the same key
				if (equals(result[n].key, key)){
					// Set on external variable and break
					map = result[n];
					break;
				}
			}
			//If not existing elements were found, create
			if (!map) {
				// Create with base values
				map = {
					key: 		key,
					length: 0, 
					items: 	[],
				};
				// Add element to map array
				result.push(map);
			}

			// Increment the length
			map.length++;
	
			// Push current item to items
			map.items.push(this.items[i]);
		}

		//Return for chaining
		return new JQL(result);
	}

	//Order elements using provided expression
	function order(expression) {
		//Check arguments
		if (!expression)
			throw new Error("Expression is invalid");

		// Define sort action estracting values from objects
		const sortAction = function(a, b) {
			//Get value for "a" and "b" element
			let aValue = expression(a),
					bValue = expression(b);
		
			//Check if one element is greater then the second one
			if(aValue < bValue) return -1;
			if(aValue > bValue) return 1;
			return 0;
		};
		
		//Copy array in order to avoid modifications on original
		let order = [];
		for(let i = 0; i < this.items.length; i++){
			order.push(this.items[i]);
		}

		// Define output array
		let result = order.sort(sortAction);
		
		// Return for chaining
		return new jslinq(result);
	}
	//
	//#endregion

	//#region 📉 Functions: Data
	//
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
	//
	//#endregion

	//#region 📖 Functions: Logging
	//
	// Dir
	// A *better* console.dir()
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
	// A *better* console.log()
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
	// A *better* console.table()
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
	//
	//#endregion

	// ✅ Constructor
	function constructor(array) {
		return new JQL(array);
	}

	// ✅ Exports functions
	return constructor;
}));