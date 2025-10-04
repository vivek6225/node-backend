//------core module-------------------------------
const path = require('path');

//------------External Module------------------------
const express = require('express');

//-------------Local Modules---------------------
const rootDir = require('../utils/pathUtil');
 const homeRouter = express.Router();


homeRouter.get("/",(req,res,next)=>{
  console.log("Handlong / for GET", req.url,req.method);
  res.sendFile(path.join(rootDir,"views", "home.html"))
})

module.exports = homeRouter;
