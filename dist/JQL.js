/*!
 * JQL
 * A simple intuitive JSON Query Language inspired by MySQL and jslinq made in javascript.
 * @version    : 0.1.0
 * @author     : DerianAndre
 * @repository : https://github.com/DerianAndre/JQL.git
 * @built      : 16/4/2021
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
		const OPERATORS = [
			'=', '<', '>', '&', '|', '^', '+', '-', '*', '/', 
			'==', '!=', '<=', '>=', '&&', '||',
			'===', '!==',
		];
		const OPS = OPERATORS.map(function(op) { return '\\' + op; }).join('|');

		//Constructor function
		function JQL(array) {
			//Check arguments
			if (!array)
				throw new Error("Provided data is invalid");
			if (!(array instanceof Array))
				throw new Error("Provided data is not a valid array");

			//Set data on current variable
			this.items = array;

			//Set function of prototype
			this.where = where;
			this.compare = compare;
			this.result = result;
			
			//Return for chaining
			return this;
		}

		function compare(expression, element) {
			if(!expression || !element) return false;

			let boolean = false, matches = [];
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
			
			switch (op) {
				// Equals
				default: case '=': case '==':
					if(element[key] == val) boolean = true;
				break;
				// Different
				case '!=':
					if(element[key] != val) boolean = true;
				break;
				// Different
				case '!==':
					if(element[key] !== val) boolean = true;
				break;
			}

			// Return
			return boolean;
		}

		//#region "where"
		//Select elements that match expression
		function where(expression) {
			//Check arguments
			if (!expression) throw new Error("Expression is invalid");
			
			//Define output array
			var outData = [];

			//For each element on data
			for (var i = 0; i < this.items.length; i++) {

				//Use function to obtain match
				var doesMatch = compare(expression, this.items[i]);
				//If element match, append
				if (doesMatch)
					outData.push(this.items[i]);
			}

			//Return for chaining
			return new JQL(outData);

		}
		//#endregion

		//#region "result"
		//Returns items
		function result() {
			return this.items;
		}
		//#endregion

		//Constructor instance
		function constructor(arrayOfData) {
			//Returns new instance of "JQL"
			return new JQL(arrayOfData);
		}

		//Exports functions
		return constructor;
	})
);