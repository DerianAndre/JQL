const data = [{"id":1,"name":"Aleta Nelsen","email":"anelsen0@printfriendly.com","active":true},{"id":2,"name":"Davidde Madgett","email":"dmadgett1@youtu.be","active":true},{"id":3,"name":"Monty Gulston","email":"mgulston2@hostgator.com","active":true},{"id":4,"name":"Edie Cardiff","email":"ecardiff3@about.com","active":false},{"id":5,"name":"Kim Guion","email":"kguion4@youtu.be","active":false},{"id":6,"name":"Tymothy Wingar","email":"twingar5@usda.gov","active":false},{"id":7,"name":"Carolus Walworche","email":"cwalworche6@economist.com","active":false}]

// For testing conditionals
const key = 'active';
const operator = '='
const variable = false;

console.log('DATA')
console.table(data);
// WHERE
console.log('\n\nSELECT')
console.log('query: SELECT *')
result = JQL(data).select('*').log(); // You don't have to use select('*') but I leave it there if you like MYSQL structure :)
console.log('query: SELECT name, active')
result = JQL(data).select('name, active').log();
// WHERE
console.log('\n\nWHERE')
// With a query (simple operators like =, ==, ===, !=, !=, <, >, <=, >=)
console.log('query: WHERE ${key} ${operator} ${variable}');
result = JQL(data).where(`${key} ${operator} ${variable}`).dir();
result = JQL(data).where(`${key} ${operator} ${variable}`).log();
result = JQL(data).where(`${key} ${operator} ${variable}`).log(false);
console.log('query: WHERE email ~ youtu.be');

result = JQL(data).where(`${key} ${operator} ${variable}`).count();
console.log(result);

result = JQL(data).where(`${key} ${operator} ${variable}`).length;
console.log(result);

console.log('query: WHERE email ~ youtu.be');
result = JQL(data).where(`email ~ youtu.be`).log();

console.log('query: WHERE active = false');
result = JQL(data).where(`active = false`).log();

console.log('Multiples conditions');
console.log(`query: active == false AND email ~ a`)
result = JQL(data).where(`active == false && email ~ a`).log();
console.log('');

console.log('Multiples conditions');

// With a function
console.log(`function: ${key} == ${variable}`);
result = JQL(data).where((i) => { return i[key] == variable; }).log();
console.log('');

// Nesting
console.log(`\n\nNesting`);
console.log(`query: SELECT name, active WHERE active = true`);
result = JQL(data)
						.select('name, active')
						.where('active = true')
						.table()


console.log('Logging');
result = JQL(data);
result.table();
result.table(['first_name', 'email']);
