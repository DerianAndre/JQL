var data = [
	{ id: 1, name: "one", category: 'fruits', countries: ["Italy", "Austria"] },
	{ id: 2, name: "two", category: 'vegetables', countries: ["Italy", "Germany"] },
	{ id: 3, name: "three", category: 'vegetables', countries: ["Germany"] },
	{ id: 4, name: "four", category: 'fruits', countries: ["Japan"] },
	{ id: 5, name: "five", category: 'fruits', countries: ["Japan", "Italy"] }
];

var key = 'category';
var variable = 'vegetables';

// Condition: equals (= or ==)
result = JQL(data).where(`${key} = ${variable}`).result();

console.log(data);
console.log(`WHERE ${key} = ${variable}`);
console.log(result);