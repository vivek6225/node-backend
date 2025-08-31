//Import the built-in HTTP module
const http = require('http');

//Create an HTTP server and define how it handles requests
 const server = http.createServer((req,res) => {
   console.log(req);
  });
   // Define the port number where the server will run
  const PORT = 3001;

  //Start the server and listen on the specified port
  server.listen(PORT,() => {
    console.log(`server running on address http://localhost:${PORT}`)
  });