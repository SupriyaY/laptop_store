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
    const id = url.parse(req.url, true).query.id;

    if(pathName === '/products' || pathName === "/"){
        res.writeHead(200, {'Content-type': 'text/html'})
        res.end('this is the PRODUCTS PAGE'); 
        } 
        
        else if(pathName === '/laptop' && id < laptopData.length){
            res.writeHead(200, {'Content-type': 'text/html'})
            // res.end(`this is the LAPTOP PAGE ${id}!`); 
            fs.readFile(`${__dirname}/templates/template-laptop.html`, 'utf-8', (err, data) => {
                const laptop = laptopData[id];
                 output = data.replace(/{%PRODUCTNAME%}/g, laptop.productName);
                 output = output.replace(/{%IMAGE%}/g, laptop.image);
                 output = output.replace(/{%PRICE%}/g, laptop.price);
                 output = output.replace(/{%SCREEN%}/g, laptop.screen);
                 output = output.replace(/{%CPU%}/g, laptop.cpu);
                 output = output.replace(/{%STORAGE%}/g, laptop.storage);
                 output = output.replace(/{%RAM%}/g, laptop.ram);
                 output = output.replace(/{%DESCRIPTION%}/g, laptop.description);

            res.end(output);
        });
        }
        
        else{
            res.writeHead(404, {'Content-type': 'text/html'})
            res.end('URL was not found on the server'); 
        }


});











//listening..
//will just keep loading until you send results back to the browswer
server.listen(1337,'127.0.0.1', () =>{
console.log("Listening for the request now");
});