
// ---------------- External Module ------------------
const express = require('express');  // Express framework
const hostRouter = express.Router(); // Create a router object for host-related routes


const homesController = require("../controllers/homes");

// ---------------- GET /add-home --------------------
// Render the "Add Home" form page
hostRouter.get("/add-home", homesController.getAddHome);
 
// ---------------- POST /add-home -------------------
// Handle form submission when a host adds a home
hostRouter.post("/add-home", homesController.postAddHome);

// ---------------- Export Modules ------------------
exports.hostRouter = hostRouter;      // Export router to use in app.js

