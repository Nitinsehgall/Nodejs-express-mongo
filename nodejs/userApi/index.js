const http = require('http');
const fs = require('fs');
const { type } = require('os');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end(`hello from the root`);
    } else if (request.url === '/about') {
        response.end('I am about page');
    } else if (request.url === '/userapi') {
        fs.readFile(`${__dirname}/user.json`, 'utf8', (err, data) => {
            if (err) {
                response.writeHead(404);
                response.end('<h1>404 error</h1>');
            } else {
                const obj = JSON.parse(data);
               
                response.end(obj[0].bio);

            }
        });
    } else {
        response.writeHead(404);
        response.end('<h1>404 error</h1>');
    }
});

// Creating a port for the server
server.listen(8000, '127.0.0.1', () => {
    console.log('Server is listening on port 8000');
});
