//Import the built-in HTTP module
const http = require('http');

//Create an HTTP server and define how it handles requests
 const server = http.createServer((req,res) => {
   console.log(req.url, req.method, req.headers);
   if(req.url === '/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>');
    res.write('<body><h1>Welcome to home</h1></body>');
    res.write('</html>')
    return res.end();
   }else if(req.url === '/products'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>');
    res.write('<body><h1>check out product</h1></body>');
    res.write('</html>')
    return res.end();
   }
   res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete coding</title></head>');
    res.write('<body><h1>like / share / subscribe</h1></body>');
    res.write('</html>')
    return res.end();
   //process.exist(); // stop event loop
  });
   // Define the port number where the server will run
  const PORT = 3000;

  //Start the server and listen on the specified port
  server.listen(PORT,() => {
    console.log(`server running on address http://localhost:${PORT}`)
  });