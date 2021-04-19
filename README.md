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

## Comparation

`~  =  ==  !=  ===  !==`
`<  >  <=  >=`

## Logical

`&& ||`

# Example Data
```json
[
	{ "id": 1, "name": "Aleta Nelsen", "email": "anelsen0@printfriendly.com", "active": true },
	{ "id": 2, "name": "Davidde Madgett", "email": "dmadgett1@youtu.be", "active": true },
	{ "id": 3, "name": "Monty Gulston", "email": "mgulston2@hostgator.com", "active": true },
	{ "id": 4, "name": "Edie Cardiff", "email": "ecardiff3@about.com", "active": false },
	{ "id": 5, "name": "Kim Guion", "email": "kguion4@youtu.be", "active": false },
	{ "id": 6, "name": "Tymothy Wingar", "email": "twingar5@usda.gov", "active": false },
	{ "id": 7, "name": "Carolus Walworche", "email": "cwalworche6@economist.com", "active": false }
]
```

# Functions

## 🔍 Query

| **Function** | **Description**                                              | **Variable** | **Type**             | **Description (Var)**                                                         |
|--------------|--------------------------------------------------------------|--------------|----------------------|-------------------------------------------------------------------------------|
| `.select()`  | Retrieve only the JSON keys                                  | `expression` | `string`, `array`    | Expression that you want to select and store into the variables               |
| `.where()`   | Specify a search condition for the keys returned by a query. | `expression` | `string`, `function` | Combination of one or more predicates using the logical operator `&&` or `||` |

### `.select()`
Carefull with this, is not the same as MYSQL!

```javascript
	JQL(data).select('id, active').where('id > 5 && active == false').log();
	► (2) [
		0: { "id": 6, "active": false },
		1: { "id": 7, "active": false }
	]
	
	JQL(data).select('id, active').where('id > 5 && active == false').log();
	► (2) [
		0: { "name": "Tymothy Wingar", "id": 6 },
		1: { "name": "Carolus Walworche", "id": 7 }
	]
```

### `.where()`
You can use multiple conditions, as a string or you can use a function.
```javascript
	// With a query
	JQL(data).where('email ~ a && active == false').log();

	// With a function
	JQL(data).where((i) => {
		return (i.email.includes('a') && i.active == false)           // .  notation
		// return (i['email'].includes('a') && i['active'] == false)  // [] notation
	}).log();

	// Both will have the same result:
	► (3) [
		0: { "id": 4, "name": "Edie Cardiff", "email": "ecardiff3@about.com", "active": false },
		1: { "id": 6, "name": "Tymothy Wingar", "email": "twingar5@usda.gov", "active": false },
		2: { "id": 7, "name": "Carolus Walworche", "email": "cwalworche6@economist.com", "active": false }
	]
```

## 📉 Data
Get that precious data

| **Function**                           | **Description**                  |
|----------------------------------------|----------------------------------|
| `.data()` or `.array()` or `.result()` | Get the items of the constructor |
| `.count()`                             | Get the items.lenght             |

### `.data()` or `.array()` or `.result()`
```javascript
	let result = JQL(JSON).items; // JQL(JSON).data();
	console.log(result);
	► (n) [{…}, {…}, {…}, …]
```

### `.count()`
```javascript
	result.count(); // console.log(result.lenth);
	► Length (n)
```

## 💻 Logging
Debug like a pro!

| **Function** | **Description**                                        | **Variable** | **Type**      | **Description (Var)**             |
|--------------|--------------------------------------------------------|--------------|---------------|-----------------------------------|
| `.dir()`     | Do a `console.dir()`                                   | `object`   | `object`        | Options                           |
| `.log()`     | Do a `console.log()` for items or constructor function | `items`    | `boolean`       | Show constrcutor function (false) |
| `.table()`   | Do a `console.table()`                                 | `columns`  | `array, string` | Columns to show                   |

### `.log()`
```javascript
	let result = JQL(JSON).log()
	► (n) [{…}, {…}, {…}, …]

	let result = JQL(JSON).log(false);
	► i {items: Array(4), length: 4, select: ƒ, where: ƒ, data: ƒ, …}
```

### `.table()`
```javascript
	let result = JQL(JSON).table(['id', 'email']);

	| id | email                      |
	|----|----------------------------|
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