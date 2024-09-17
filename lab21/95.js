const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(`Received request for ${req.url}`);
    
    if(req.url == '/about') {
        fs.readFile('about.html', (err, data) => {
            if(err) {
                res.end(err);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                // res.writeHead(200, { 'Content-Type': 'text/html' });

                res.end(data);
            }
        })
    } 
    else if(req.url == '/contact') {
        fs.readFile('contact.html', (err, data) => {
            if(err) {
                res.end(err);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        })
    }
    else if(req.url == '/services') {
        fs.readFile('service.html', (err, data) => {
            if(err) {
                res.end(err);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        })
    }
    else if(req.url == '/help') {
        fs.readFile('help.html', (err, data) => {
            if(err) {
                res.end(err);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        })
    }
    else {
        fs.readFile('home.html', (err, data) => {
            if(err) {
                res.end(err);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        })
    }
});

server.listen(3030, () => {
    console.log('Server started on port 3030');
});