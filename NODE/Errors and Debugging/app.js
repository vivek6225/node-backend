//// Import the built-in http module
const http = require('http');

// Import your custom module (syntax.js file)
const testingSyntax = require('./syntax');

// Create an HTTP server
const server = http.createServer((req, res) =>{

    // Log request details (URL and method like GET, POST, etc.)
  console.log(req.url, req.method);

   // Call the function from syntax.js
  testingSyntax();
   runtime();
   logical;
});

// Define the port number
const PORT = 3000;

// Start the server and listen on the given port
server.listen(PORT, () =>{

   // Log confirmation message when server starts
console.log(`Server running on address http://localhost:${PORT}`)
});
