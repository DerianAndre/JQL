<div align="center">
<img src="JQL.svg" width="200px" alt="JQL logo"/>

# JQL – JSON Query Language

A simple intuitive JSON Query Language inspired by [MySQL](https://www.mysql.com/) and [jslinq](https://github.com/maurobussini/jslinq) made in javascript.

**This is a work in progress and not ready for production use.**
</div>

---

# JQL and MySQL
You can do simple queries just like MySQL and it can even be shorter
```mysql
SELECT * FROM `data` WHERE `active` = true OR `email` LIKE '%{$email}%' LIMIT 5
```

With JQL this can be done like this:

```javascript
// This works:
JQL(data).select('*').where(`active = true || email ~ "${email}"`).limit(5);

// This also works:
	// ✅ Smaller footprint 😏
	// ✅ You can remove .select('*') as we already have all the data 🙄
	// ✅ You can also use: "<string>" or '<string>', AND or &&, OR or || 🥵
JQL(data).where(`active = true OR email ~ '${email}'`).limit(5);

// Or with a function like this:
JQL(data).where((i) => { 
	return i.email.contains(email) || i.active == true;
}).limit(5);
```

---

# Operators
Supported operators for expressions are very basic. Use a function for a more complex predicate.

## Comparasion
`~ ~~ ~=  =  ==  !=  ===  !==`
`<  >  <=  >=`

**Note:** `~` is insensitive while `~~` or `~=` is case sensitive.

## Logical

`&& AND || OR`

# Example Data
```javascript
const data = [
	{ "id": 1, "name": "Aleta Nelsen", "email": "anelsen0@printfriendly.com", "active": true },
	{ "id": 2, "name": "Davidde Madgett", "email": "dmadgett1@youtu.be", "active": true },
	{ "id": 3, "name": "Monty Gulston", "email": "mgulston2@hostgator.com", "active": true },
	{ "id": 4, "name": "Edie Cardiff", "email": "ecardiff3@about.com", "active": false },
	{ "id": 5, "name": "Kim Guion", "email": "kguion4@youtu.be", "active": false },
	{ "id": 6, "name": "Tymothy Wingar", "email": "twingar5@usda.gov", "active": false },
	{ "id": 7, "name": "Carolus Walworche", "email": "cwalworche6@economist.com", "active": false }
	...
]
```
---

# Functions

## 🔍 Query

| **Function** | **Description**                                   | **Variable** | **Type**             | **Description (Var)**                                             |
|--------------|---------------------------------------------------|--------------|----------------------|-------------------------------------------------------------------|
| `.select()`  | Select the data keys (columns) you want           | `expression` | `string`, `array`    | Expression that you want to select and store into the variables   |
| `.where()`   | Filter the data with an expression or a function. | `expression` | `string`, `function` | Combination of one or more predicates using the logical operators |

### `.select()`
Select the data keys (columns) you want
Carefull with this, is not the same as MYSQL! **The order matters.**
#### Example
```javascript
JQL(data).select('name, active').where('id > 5 && active == false').limit(5).log();
► (0) []
// .select() will give you an array with two columns and then you are searching for a key that isn't longer in the array.

JQL(data).where('id > 5 && active == false').select('name, active').limit(5).log();
► (5) [
	0: {name: "Eugenio Goodall", active: false}
	1: {name: "Dorian Simonnot", active: false}
	2: {name: "Cyb Botwood", active: false}
	3: {name: "Jandy Eddoes", active: false}
	4: {name: "Connie Riddoch", active: false}
]
```

### `.where()`
Filter the data with an expression or a function.
You can use multiple conditions, as a string or you can use a function.
#### Example
```javascript
// With a query
JQL(data).where('email ~ a && active == false').log();

// With a function
JQL(data).where((i) => {
	// Dot notation (a bit smaller 🤓)
	return (i.email.includes('a') && i.active == false)
}).log();
// Or like this
JQL(data).where((i) => {
	// Bracket notation
	return (i['email'].includes('a') && i['active'] == false)
}).log();

// Both will have the same result:
► (3) [
	0: { "id": 4, "name": "Edie Cardiff", "email": "ecardiff3@about.com", "active": false },
	1: { "id": 6, "name": "Tymothy Wingar", "email": "twingar5@usda.gov", "active": false },
	2: { "id": 7, "name": "Carolus Walworche", "email": "cwalworche6@economist.com", "active": false }
]
```

---

## 📉 Data
| **Function**                           | **Description**        |
|----------------------------------------|------------------------|
| `.data()` or `.array()` or `.result()` | Return the items       |
| `.count()`                             | Return the data length |
| `.first()`                             | Return the first item  |
| `.last()`                              | Return the last item   |

### `.data()` or `.array()` or `.result()`
Get that precious data
#### Example
```javascript
let result = JQL(data).items;
// Or like this
let result = JQL(data).data();

// Both will have the same result:
console.log(result);
► (n) [{…}, {…}, {…}, …]
```

### `.count()`
Get the data.length
#### Example
```javascript
let result = JQL(data).length;
// Or like this
let result = JQL(data).count();

// Both will have the same result:
console.log(result);
► Length (n)
```

### `.first()`
Return the first item as data (true) or constructor (false)
#### Example
```javascript
let result = JQL(data).last(); 
console.log(result);
► {id: 1, name: "Waldon Shortell", email: "wshortell0@mediafire.com", gender: "Cis Man", ipv4: "145.153.192.113", …}

let result = JQL(data).last(false); 
console.log(result);
► JQL {items: Array(1), length: 1, select: ƒ, where: ƒ, limit: ƒ, …}
```

### `.last()`
Return the last item as data (true) or constructor (false)
#### Example
```javascript
let result = JQL(data).last(); 
console.log(result);
► {id: 1000, name: "Lusa Ellesworth", email: "lellesworthrr@cmu.edu", gender: "Transfeminine", ipv4: "25.26.80.211", …}

let result = JQL(data).last(false); 
console.log(result);
► JQL {items: Array(1), length: 1, select: ƒ, where: ƒ, limit: ƒ, …}
```

## 💻 Logging
Debug like a pro!

| **Function** | **Description**                 | **Variable** | **Type** | **Default**                                               |
|--------------|---------------------------------|--------------|----------|-----------------------------------------------------------|
| `.dir()`     | Do a *better* `console.dir()`   | `args`       | `object` | `{ collapse: true, items: true, limit: 10, options: {} }` |
| `.log()`     | Do a *better* `console.log()`   | `args`       | `object` | `{ collapse: true, items: true, limit: 10 }`              |
| `.table()`   | Do a *better* `console.table()` | `args`       | `object, string` | `{ collapse: true, columns: false, limit: 10 }`   |

### `.dir()`
#### Arguments
| Argument   | Default   | Type      | Description                                   |
|------------|-----------|-----------|-----------------------------------------------|
| `collapse` | `true`    | `boolean` | Collapse the log information                  |
| `items`    | `true`    | `boolean` | Log items or constructor function             |
| `limit`    | `10`      | `integer` | The number of elements that the log will show |
| `options`  | `{}`      | `object`  | Options of console.dir()                      |
#### Example
```javascript
let result = JQL(data).log()
► (n) [{…}, {…}, {…}, …]

let result = JQL(data).log({ items: false });
► i {items: Array(4), length: 4, select: ƒ, where: ƒ, data: ƒ, …}
```

### `.log()`
#### Arguments
| Argument   | Default   | Type      | Description                                   |
|------------|-----------|-----------|-----------------------------------------------|
| `collapse` | `true`    | `boolean` | Collapse the log information                  |
| `items`    | `true`    | `boolean` | Log: items (true) / constructor (false)       |
| `limit`    | `10`      | `integer` | The number of elements that the log will show |
#### Example
```javascript
let result = JQL(data).log()
► (n) [{…}, {…}, {…}, …]

let result = JQL(data).log({ items: false });
► i {items: Array(4), length: 4, select: ƒ, where: ƒ, data: ƒ, …}
```

### `.table()`
#### Arguments
| Argument   | Default   | Type            | Description                                   |
|------------|-----------|-----------------|-----------------------------------------------|
| `collapse` | `true`    | `boolean`       | Collapse the log information                  |
| `columns`  | `false`   | `string, array` | Columns of the table to show                  |
| `limit`    | `10`      | `integer`       | The number of elements that the log will show |
#### Example
```javascript
let result = JQL(data).table({ columns: ['id', 'email'] });

| id | email                      |
|----|----------------------------|
| 0  | anelsen0@printfriendly.com |
| 1  | dmadgett1@youtu.be         |
|... | ...                        |
► Array (n)
```
---

# Why tho?
I have another project that I made with an API (express) and MongoDB (mongoose) and I wanted to have offline support when I exported my WebApp with Capacitorjs as an Android "native" App. The problem was that there is no way to have a nodejs server inside the App so I can't use the express API so I figuered out that I can export my DB with a Node command and save it inside my static folder so I can use JSON as an static database right? pretty simple.

Then I got into JSLINQ and it's pretty much what I needed. **But I just like to have somethings my way** and that's it haha.

**TL;DR:** I just wanted to make things in my on way and to learn about how to do it in the process.

**Big thanks to JSLINQ for their awesome work and being open-source.**

<div align="center"><br>
  <img style="margin-top: 2rem" src="JQL.svg" width="100px" alt="JQL"/><br><br>
  <img style="margin-top: 1rem" src="https://derianandre.com/assets/brand/logo-responsive-theme.svg" width="25px" alt="Derian André"/>
</div>