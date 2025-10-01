// --------------- Core module ----------------------------------
const path = require('path'); 

// --------------- External module -------------------------------
const express = require('express');  

// Create a router object
const userRouter = express.Router();  

// --------------- Local module ----------------------------------

const rootDir = require("../utils/pathUtil");

// Route: GET /
userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','home.html')); 
});

// Export the router so it can be used in app.js/server.js
module.exports = userRouter;  
