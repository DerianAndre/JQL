const data = [{"id":1,"name":"Aleta Nelsen","email":"anelsen0@printfriendly.com","active":true},{"id":2,"name":"Davidde Madgett","email":"dmadgett1@youtu.be","active":true},{"id":3,"name":"Monty Gulston","email":"mgulston2@hostgator.com","active":true},{"id":4,"name":"Edie Cardiff","email":"ecardiff3@about.com","active":false},{"id":5,"name":"Kim Guion","email":"kguion4@youtu.be","active":false},{"id":6,"name":"Tymothy Wingar","email":"twingar5@usda.gov","active":false},{"id":7,"name":"Carolus Walworche","email":"cwalworche6@economist.com","active":false}]

// For testing conditionals
const key = 'active';
const operator = '='
const variable = false;

console.log('DATA')
console.table(data);
console.log('============================================')
console.log('')

// WHERE
console.log('WHERE')
// With a query (simple operators like =, ==, ===, !=, !=, <, >, <=, >=)
result = JQL(data).where(`${key} ${operator} ${variable}`);
console.log(`query: WHERE ${key} ${operator} ${variable}`);
console.log(result.result());
console.log(result.count());

// With a function
result = JQL(data).where((i) => { return i[key] == variable; }).array();
console.log(`function: ${key} == ${variable}`);
console.log(result);

// Nesting
console.log(`Nesting`);
result = JQL(data)
						.where(`${key} ${operator} ${variable}`)
						.where(`id >= 6`)
						.data();
console.log(result);


console.log('Logging');
result = JQL(data);
result.table();
result.table(['first_name', 'email']);
