# JQL <small style="opacity:0.45">JSON Query Language</small>
A simple intuitive JSON Query Language inspired by [MySQL](https://www.mysql.com/) and [jslinq](https://github.com/maurobussini/jslinq) made in javascript.

**This is a work in progress and not ready for production use just experimental porpouses**

# ANTLR (*)
Using ANTLR version 4
Add the binary `antlr-<version>-complete.jar` file into `/src/antlr/bin` folder and modify `package.json` if needed.

Use the following command to build JQL ANTLR files
```
	npm run antlr
```
**(*) ANTLR COULD BE DROPPED DUE TO SIZE ~ +400kb**

# Operators
Supported operators for expressions are very basic. Use a function for a more complex predicate.

| **Operator type** |  **Symbols**             |
|-------------------|--------------------------|
| **`Comparation`** | `~  =  ==  !=  ===  !==` |
|                   | `<  >  <=  >=`           |
| **`Logical`**     | `&& \|\|`                |


# Functions

## Query

| **Function** | **Description**                                              | **Variable** | **Type**             | **Description (Var)**                                                         |
|--------------|--------------------------------------------------------------|--------------|----------------------|-------------------------------------------------------------------------------|
| `.select()`  | Retrieve only the JSON keys                                  | `expression` | `string`, `function` | Expression that you want to select and store into the variables               |
| `.where()`   | Specify a search condition for the keys returned by a query. | `expression` | `string`, `function` | Combination of one or more predicates using the logical operator `&&` or `||` |

## Data
Get that precious data

| **Function**                           | **Description**                  |
|----------------------------------------|----------------------------------|
| `.data()` or `.array()` or `.result()` | Get the items of the constructor |
| `.count()`                             | Get the items.lenght             |

### `.data()` or `.array()` or `.result()`
```
	let result = JQL(JSON).items; // JQL(JSON).data();
	console.log(result);
	► (n) [{…}, {…}, {…}, …]
```

### `.count()`
```
	result.count(); // console.log(result.lenth);
	► Length (n)
```


## Logging
Debug like a pro!

| **Function** | **Description**                                        | **Variable** | **Type**      | **Description (Var)**             |
|--------------|--------------------------------------------------------|--------------|---------------|-----------------------------------|
| `.dir()`     | Do a `console.dir()`                                   | `object`   | `object`        | Options                           |
| `.log()`     | Do a `console.log()` for items or constructor function | `items`    | `boolean`       | Show constrcutor function (false) |
| `.table()`   | Do a `console.table()`                                 | `columns`  | `array, string` | Columns to show                   |

### `.log()`
```
	let result = JQL(JSON).log()
	► (n) [{…}, {…}, {…}, …]

	let result = JQL(JSON).log(false);
	► i {items: Array(4), length: 4, select: ƒ, where: ƒ, data: ƒ, …}
```

### `.table()`
```
	let result = JQL(JSON).table(['id', 'email']);

	| id | email                      |
	|----| ---------------------------|
	| 0  | anelsen0@printfriendly.com |
	| 1  | dmadgett1@youtu.be         |
	...
	► Array(n)
```


# Why tho?
I have another project that I made with an API (express) and MongoDB (mongoose) and I wanted to have
offline support when I exported my WebApp with Capacitorjs as an Android "native" App.
The problem was that there is no way to have an nodejs server inside the App so I can't use the express API
so I figuered out that I can export my DB with a Node command and save it inside my static folder so I can use JSON as an static database right? pretty simple.

Then I got into JSLINQ and it's pretty much what I needed. But I just like to have somethings my way and that's it haha.

**TL;DR:** I just wanted to make things in my on way and to learn about how to do it.

**Big thanks to JSLINQ for their awesome work and being open-source.**