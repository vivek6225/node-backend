const http = require('http');
const server = http.createServer((req, res) => {
  console.log(req);
  res.end();

});
const PORT = 3002;
server.listen(PORT, () =>{
  console.log(`server running on address http://localhost:${PORT}`);
});