const data = [{"id":1,"name":"Aleta Nelsen","email":"anelsen0@printfriendly.com","active":true},{"id":2,"name":"Davidde Madgett","email":"dmadgett1@youtu.be","active":true},{"id":3,"name":"Monty Gulston","email":"mgulston2@hostgator.com","active":true},{"id":4,"name":"Edie Cardiff","email":"ecardiff3@about.com","active":false},{"id":5,"name":"Kim Guion","email":"kguion4@youtu.be","active":false},{"id":6,"name":"Tymothy Wingar","email":"twingar5@usda.gov","active":false},{"id":7,"name":"Carolus Walworche","email":"cwalworche6@economist.com","active":false}]

// For testing conditionals
const key = 'active';
const operator = '='
const variable = false;

console.log('DATA')
console.table(data);
// WHERE
console.log('\n\nWHERE')
// With a query (simple operators like =, ==, ===, !=, !=, <, >, <=, >=)
console.log('query: WHERE ${key} ${operator} ${variable}');
result = JQL(data).where(`${key} ${operator} ${variable}`).log(false);
result = JQL(data).where(`${key} ${operator} ${variable}`).count();
console.log('query: WHERE email ~ youtu.be');
result = JQL(data).where(`email ~ youtu.be`).log();
console.log('query: WHERE name ~ a');
result = JQL(data).where(`name ~ a`).log();
console.log('');

// With a function
result = JQL(data).where((i) => { return i[key] == variable; });
console.log(`function: ${key} == ${variable}`);
result.log();
console.log('');

// Nesting
console.log(`\n\nNesting`);
result = JQL(data)
						.where(`${key} ${operator} ${variable}`)
						.where(`id >= 6`)
						.log()


console.log('Logging');
result = JQL(data);
result.table();
result.table(['first_name', 'email']);
