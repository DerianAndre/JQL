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
			'=', '<', '>', '&', '|', '^', '+', '-', '*', '/', 
			'==', '!=', '<=', '>=', '&&', '||',
			'===', '!==',
		];
		// Make them regex ready
		const OPS = OPERATORS.map(function(op) { return '\\' + op; }).join('|');

		// Constructor
		function JQL(array) {
			//Check arguments
			if (!array || !(array instanceof Array))
				throw new Error("Data is invalid or is not a valid array");

			// Set data on current variable
			this.items = array;

			// Set function of prototype
			this.select = select;
			this.where = where;
			this.compare = compare;

			this.count = count;

			// Return functions of items
			// I like it this way because if forget things 😪
			this.data = data;
			this.array = data;
			this.result = data;

			// Loggin
			// Debug like a pro 😉
			this.log = log;
			this.table = table;
			this.dir = dir;
			
			// Return for chaining
			return this;
		}

		// Compare: Compare an expression by a qery string or a function
		function compare(expression, element) {
			if( (!expression && typeof expression !== 'string') || !element ) return false;

			let matches = [];
			const	regex = new RegExp(`(\\w+) (${OPS}) (\\w+)`, 'gm');

			// Get matches
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

			// Check
			let 
				key = matches[1],
				op  = matches[2],
				val = matches[3];

			if(!key || !op || !val) return false;
			if(val == 'true')  val = true;
			if(val == 'false') val = false;
			if(/^\d+$/.test(val)) val = parseInt(val);

			switch (op) {
				//
				default:
					return false;
				break;
				//
				case '=': case '==':
					if(element[key] == val) return true;
				break;
				//
				case '===':
					if(element[key] == val) return true;
				break;
				//
				case '!=':
					if(element[key] != val) return true;
				break;
				//
				case '!==':
					if(element[key] !== val) return true;
				break;
				//
				case '!==':
					if(element[key] !== val) return true;
				break;
				//
				case '<':
					if(element[key] < val) return true;
				break;
				//
				case '<=':
					if(element[key] <= val) return true;
				break;
				//
				case '>':
					if(element[key] > val) return true;
				break;
				//
				case '>=':
					if(element[key] >= val) return true;
				break;
			}
		}

		function select(expression) {
			//Check arguments
			if (!expression) throw new Error("Expression is invalid");
			
			//Return for chaining
			return new JQL(result);
		}

		// Where: Select elements that match expression by a qery string or a function
		function where(expression) {
			//Check arguments
			if (!expression) throw new Error("Expression is invalid");
			
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

    // Count: Returns count of elements
    function count() {
			return this.items.length;
		}

		// Result: Returns items
		function data() {
			return this.items;
		}

		//#region Logging
		// Dir: console.dir() for items
		function dir() {
			console.dir(this.items, { depth: null });
		}

		// Log: console.log() for constructor
		function log() {
			console.log(this);
		}

		// Table: console.table() for items
		function table(columns = false) {
			console.table(this.items, columns);
		}
		//#endregion

		// Constructor: Constructor instance
		function constructor(array) {
			return new JQL(array);
		}

		// Exports functions
		return constructor;
	})
);