
const axios = require('axios');
const https = require('https');
const fs = require('fs');

// Read SSL/TLS certificates
const privateKey = fs.readFileSync('path/to/privatekey.pem', 'utf8');
const certificate = fs.readFileSync('path/to/certificate.pem', 'utf8');
const ca = fs.readFileSync('path/to/ca.pem', 'utf8'); // (Optional) Read CA certificate if using a chain

const credentials = {
  key: privateKey, // need to specify the ssl/tls certificate 
  cert: certificate,
  ca: ca // (Optional) Pass CA certificate if using a chain
};

//need to generate SSL/TLS certificates or obtain them from a trusted Certificate Authority to enable secure communication.
const server = https.createServer(credentials, (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is an HTTPS server!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = 3000; // Default HTTPS port

server.listen(PORT, () => {
  console.log(`HTTPS server is running on port ${PORT}`);
});

//Axios is a JavaScript library used for making HTTP requests from client-side environments like web browsers or client-side application
 axios.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a819df03f0ecdf46f29d41215b3f39b7').then((data) =>{
     console.log(data)
 }).catch((error) =>console.log(error))