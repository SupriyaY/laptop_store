//core node modules
const fs = require('fs');
const http = require('http');
const url = require('url');

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

    //query is parsed into an object
    const pathName = url.parse(req.url, true).pathname;


    if(pathName === '/products' || pathName === ""){
        res.writeHead(200, {'Content-type': 'text/html'})
        res.end('this is the PRODUCTS PAGE'); 
        } 
        
        else if(pathName === '/laptop'){
            res.writeHead(200, {'Content-type': 'text/html'})
            res.end('this is the LAPTOP PAGE'); 
        }
        


});











//listening..
//will just keep loading until you send results back to the browswer
server.listen(1337,'127.0.0.1', () =>{
console.log("Listening for the request now");
});