// ------------------ Core Module ---------------------
const path = require('path'); // Node.js module for handling file and directory paths

// ---------------- External Module ------------------
const express = require('express');  // Express framework
const hostRouter = express.Router(); // Create a router object for host-related routes

// ---------------- Local Module ---------------------
const rootDir = require("../utils/pathUtil"); // Utility to get root directory path

// ---------------- GET /add-home --------------------
// Render the "Add Home" form page
hostRouter.get("/add-home", (req, res, next) => {
  res.render('addHome', { pageTitle: 'Add Home to Airbnb' }); 
})

// ---------------- Store Registered Homes ----------------
const registeredHomes = []; // Array to store registered home details

// ---------------- POST /add-home -------------------
// Handle form submission when a host adds a home
hostRouter.post("/add-home", (req, res, next) => {
  console.log('Home Registration successful for:', req.body, req.body.houseName);
  registeredHomes.push({ houseName: req.body.houseName }); // Save home details
  res.render('homeAdded', { pageTitle: 'Home Added Successfully' }); // Render success page
})

// ---------------- Export Modules ------------------
exports.hostRouter = hostRouter;      // Export router to use in app.js
exports.registeredHomes = registeredHomes; // Export array to access registered homes elsewhere
