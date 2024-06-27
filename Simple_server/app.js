const http = require('http'); //http module
const hostname = '127.0.0.1'; //localhost
const port = 3000; //port number

//createServer - method. It creates a server
//req - request object. It is used to get the data from the client
//res - response object. It is used to send the data to the client
//statusCode - 200. It means success (300 - redirect, 400 - client error, 500 - server error)
//setHeader - method. It sets the header of the response
//end - method. It sends the response to the client
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello http server');
});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});