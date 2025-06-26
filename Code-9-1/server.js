const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  const filePath = req.url === '/images/favicon.ico' 
    ? path.join(__dirname, 'images', 'favicon.ico') 
    : null;

  if (filePath) {
    fs.readFile(filePath, (err, data) => {
      res.writeHead(err ? 404 : 200, { 'Content-Type': 'image/x-icon' });
      res.end(err ? 'Favicon not found' : data);
    });
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>My Page</title>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon">
      </head>
      <body>
        <h1>Hello, World!</h1>
      </body>
      </html>
    `);
  }
}).listen(3000, () => console.log('Server running on http://localhost:3000'));