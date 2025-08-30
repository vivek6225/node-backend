const http = require('http');

// function requestListener(request,response){
//   console.log(request)
// } old style  
  
 const server = http.createServer((req,res) => {
   console.log(req);
  });
  const PORT = 3001;
  server.listen(PORT,() => {
    console.log(`server running on address http://localhost:${PORT}`)
  });