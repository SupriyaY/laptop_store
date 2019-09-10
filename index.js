//core node modules
const fs = require('fs');
const http = require('http');

//have to pass the absolute value to that file
//need the UTF-8 because it will return something called a buffer instead of a file
const json= fs.readFileSync(`${__dirname}/data/data.json`,'utf-8');
const laptopData = JSON.parse(json);
// console.log(__dirname);
// console.log(json);
console.log(laptopData);

//run each time the webserver is accessed
//request and response - objects with methods and properties that we are able to use
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'})
    res.end('this is the response')
console.log("Some accessed the server!")
});











//listening..
//will just keep loading until you send results back to the browswer
server.listen(1337,'127.0.0.1', () =>{
console.log("Listening for the request now");
});