const http = require('http');
const  requestHndler = require('./user');

const server  = http.createServer(requestHndler);

const PORT = 3000;
server.listen(PORT,() => {
  console.log(`server running on address http://localhost:${PORT}`)

});
