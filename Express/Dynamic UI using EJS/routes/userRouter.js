// -------------------- Core Modules --------------------
const path = require('path'); // Node.js core module for handling file paths

// -------------------- External Modules ----------------
const express = require('express'); // Express framework
const userRouter = express.Router(); // Create a router for user-related routes

// -------------------- Local Modules -------------------
const { registeredHomes } = require('./hostRouter'); // Import data from hostRouter

// -------------------- Routes --------------------------
userRouter.get("/", (req, res, next) => {
  // Log all registered homes to console
  console.log(registeredHomes);

  // Render 'home' view template and pass registeredHomes & pageTitle
  res.render('home', {
    registeredHomes: registeredHomes, // Pass the list of homes
    pageTitle: 'airbnb Home'           // Page title for the template
  });
});

// -------------------- Export Router -------------------
module.exports = userRouter; // Export this router to use in app.js
