
      

          //External modules
  const express = require('express');
 
              //Local Modules
    const requestHandler = require('./user');
    const app = express();
    
app.get("/",(req,res,next) => {
  console.log("came in first middleware", req.url,req.method);
  next();
});

app.post("/submit-details",(req,res,next) => {
  console.log("came in second middleware", req.url,req.method);
  res.send("<p>Wlecome to express.js</p>")
});
app.use("/",(req,res,next) =>{
  console.log("came in another middleware",req.url,req.method);
  res.send("<P>Came from another MiddleWare</P>");
});
const PORT = 3000;
app.listen(PORT,() =>{
  console.log(`Server is running on address http://localhost:${PORT}`);
})
