// const person = require('./person');

// console.log(person);

// const Person = require('./person');

// const person1 = new Person('John Doe', 30);

// person1.greeting();

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', data => console.log('Called Listener:', data));

// logger.log('Hello World');

const http = require('http');
const path = require('path');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//     // console.log(req.url);
//     if(req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end('<h1>Homepage</h1>');
//     }
// });

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err)
                throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    }
    
    if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err)
                throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    }
    
    if (req.url === '/api/users') {
        const users = [
            { name: 'Bob Smith', age: 40 },
            { name: 'John Doe', age: 30 }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));