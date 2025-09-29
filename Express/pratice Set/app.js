   //External
 const express = require('express');
 
 const app = express();
 const PORT = 3001;
 app.use((req,res,next) =>{
  console.log("first Dummy middleWare",req.url,req.method);
  next();
 });

 app.use((req,res,next) =>{
  console.log("second Dummy MiddleWare",req.url,req.method);
  next();
 });

//  app.use((req,res,next) =>{
//   console.log("Third MiddleWare",req.url,req.method);
//   res.send("<h1>Welcome to Complete coding</h1>");
//  });
app.get("/",(req,res,next) =>{
  console.log("Handling / for Get" ,req.url,req.method);
  res.send(`<h1>Welcome to complete coding</h1>`);
});
app.get("/contact-us",(req,res,next)=>{
  console.log("handling / contact-us for Get" ,req.url,req.method);
  res.send(
    `<h1>plese give me your details here</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name"/>
    <input type="email" name="email" placeholder="Enter your email"/>
    <input type="Submit"/>
    </form>
    `);
});

app.post("/contact-us",(req,res,next) => {
  console.log("Handling /contact-us for POST", req.url,req.method)
  res.send(`<h1>We will contact you shortly </h1>`);

});

 app.listen(PORT,() =>{
  console.log(`server running on address http://localhost:${PORT}`)
 })