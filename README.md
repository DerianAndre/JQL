# JQL (JSON Query Language)
A simple intuitive JSON Query Language inspired by [MySQL](https://www.mysql.com/) and [jslinq](https://github.com/maurobussini/jslinq) made in javascript.

**This is a work in progress**


# Operators
Supported operators for exprresions are very basic and currently does not support logical operators (for now)
Use a function for a more complex expression.
| Operator type   |  Symbols                 |
| --------------- | ------------------------ |
| **Condtional**  | `~  =  ==  ===  !=  !==` |
| **Order**       | `<  >  <=  >=`           |


# Functions
## Query
```
	.where(expression)	// {String, Function} expression What you want to compare
	.count()
```

## Data
Get data (items)
```
	.items || .data() || .array() || .result()

	//Will produce the same
	let result = JQL(JSON).items; // JQL(JSON).data();

	console.log(result);
	► (n) [{…}, {…}, {…}, …]
```

## Logging
Debug like a pro!
```
	.dir()
	.log()					// {Boolean}	items			Do a console.log() for: data / constructor
	.table(columns)	// {String}		columns		Columns of the table you want to show

	// Log
	// This will automatically console.log() the items
	let result = JQL(JSON).log()

	► (n) [{…}, {…}, {…}, …]

	// This will console.log() the constructor function
	let result = JQL(JSON).log(false);

	► i {items: Array(4), length: 4, select: ƒ, where: ƒ, compare: ƒ, …}

	// Table
	let result = JQL(JSON).table(['id', 'email']);
```
**Will log this table:**
| id  | email                        |
| --- | ---------------------------- |
| 0   | "anelsen0@printfriendly.com" |
| 1   | "dmadgett1@youtu.be"         |


# Why tho?
I have another project that I made with an API (express) and MongoDB (mongoose) and I wanted to have
offline support when I exported my WebApp with Capacitorjs as an Android "native" App.
The problem was that there is no way to have an nodejs server inside the App so I can't use the express API
so I figuered out that I can export my DB with a Node command and save it inside my static folder so I can use JSON as an static database right? pretty simple.

Then I got into JSLINQ and it's pretty much what I needed. But I just like to have somethings my way and that's it haha.

**TL;DR:** I just wanted to make things in my on way and to learn about how to do it.

**Big thanks to JSLINQ for their awesome work and being open-source.**