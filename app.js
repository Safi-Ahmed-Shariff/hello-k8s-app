const http = require('http');

// Create a server that responds with "Hello Kubernetes!"
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Kubernetes!\n');
});

// Listen on port 8080
server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
