# JQL (JSON Query Language)
A simple intuitive JSON Query Language inspired by [MySQL](https://www.mysql.com/) and [jslinq](https://github.com/maurobussini/jslinq) made in javascript.

**This is a work in progress**

# Functions
## Query
```
	.where(expression)	// {string, function} expression 
	.count()
```

## Data
Get data
```
	.data() || .array() || .result()

	let result = JQL(JSON).data();
	result => [
		{},{},{}...	
	];
```

## Logging
Debug like a pro!
```
	.dir()
	.log()
	.table(columns)	// String

	// Table
	let result = JQL(JSON).table(['id', 'email'])
	| id  | email                        |
	| --- | ---------------------------- |
	| 0   | "anelsen0@printfriendly.com" |
	| 1   | "dmadgett1@youtu.be"         |
```