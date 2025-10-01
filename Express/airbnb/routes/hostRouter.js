// --------------- Core module ----------------------------------
const path = require('path'); 

// --------------- External module -------------------------------
const express = require('express'); 
const hostRouter = express.Router(); 

// --------------- Local module ----------------------------------

const rootDir = require("../utils/pathUtil");

// ---------------- GET /host/add-home ------------------------
//  this handles GET request
hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','AddHome.html'));
});

// ---------------- POST /host/add-home -----------------------
//  this handles POST request
hostRouter.post("/add-home", (req, res, next) => {
  console.log("Form Data:", req.body); // Make sure bodyParser is active in app.js
  res.sendFile(path.join(__dirname,'../','views','homeAdded.html'));
});

// Export the router
module.exports = hostRouter; 
