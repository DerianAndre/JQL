// For testing conditionals
const key = 'active';
const operator = '='
const variable = false;

console.log('DATA')
console.log('Default limit is 10, lets change it to 20');
JQL(data).table({ limit: 20 });

// WHERE
console.log('\n\nSELECT')
console.log('query: SELECT *')
result = JQL(data).select('*').log(); // You don't have to use select('*') but I leave it there if you like MYSQL structure :)
console.log('query: SELECT name, active')
result = JQL(data).select('name, active').log({ items: false});
// WHERE
console.log('\n\nWHERE')
// With a query (simple operators like =, ==, ===, !=, !=, <, >, <=, >=)
console.log(`query: WHERE ${key} ${operator} ${variable}`);
result = JQL(data).where(`${key} ${operator} ${variable}`).dir();
result = JQL(data).where(`${key} ${operator} ${variable}`).dir({ items: false });
result = JQL(data).where(`${key} ${operator} ${variable}`).log();
result = JQL(data).where(`${key} ${operator} ${variable}`).log({ items: false });
console.log('query: WHERE email ~ youtu.be | count');

result = JQL(data).where(`${key} ${operator} ${variable}`).count();
console.log(result);

result = JQL(data).where(`${key} ${operator} ${variable}`).length;
console.log(result);

console.log('query: WHERE email ~ yahoo');
result = JQL(data).where(`email ~ yahoo`).log();

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


console.log('Table');
result = JQL(data);
result.table();
result.table({ columns: ['first_name', 'email'], limit: 15 });
