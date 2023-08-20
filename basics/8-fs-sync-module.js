const {readFileSync, writeFileSync} = require('fs');


console.log('start');
const first = readFileSync('./content/first', 'utf8');
const second = readFileSync('./content/second', 'utf8');
console.log('finished reading');

writeFileSync('./content/result-sync', `Here is the result: ${first}, ${second}`, { flag: 'a'});
console.log('finished');
