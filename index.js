//core node modules
const fs = require('fs');

//have to pass the absolute value to that file
//need the UTF-8 because it will return something called a buffer instead of a file
const json= fs.readFileSync(`${__dirname}/data/data.json`,'utf-8');

console.log(__dirname);
console.log(json);