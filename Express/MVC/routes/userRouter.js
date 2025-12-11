
// -------------------- External Modules ----------------
const express = require('express'); // Express framework
const userRouter = express.Router(); // Create a router for user-related routes

const homesContoller = require("...controllers/homes");

// -------------------- Export Router -------------------
module.exports = userRouter; // Export this router to use in app.js
