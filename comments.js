// Create web server
// 1. Load http module
// 2. Create server with http module
// 3. Add request event listener to server
// 4. Listen on port 3000
// 5. Start server

// 1. Load http module
const http = require('http');

// 2. Create server with http module
const server = http.createServer((req, res) => {
    // 3. Add request event listener to server
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        res.end(body);
    });
});

// 4. Listen on port 3000
server.listen(3000);

// 5. Start server
console.log('Server running on port