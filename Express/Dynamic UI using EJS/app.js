// -------------------- Core Module --------------------
const path = require('path'); // Node.js path module for handling file paths

// -------------------- External Module ----------------
const express = require('express'); // Express framework

// -------------------- Local Modules ------------------
const userRouter = require("./routes/userRouter"); // User-related routes
const { hostRouter } = require("./routes/hostRouter"); // Host-related routes (destructured)
const rootDir = require("./utils/pathUtil"); // Utility to get root directory

// -------------------- App Setup ----------------------
const app = express(); // Create Express app instance

// -------------------- View Engine Setup --------------
app.set('view engine', 'ejs'); // Set EJS as the templating engine
app.set('views', 'views'); // Set the folder where view files are stored

// -------------------- Middleware ---------------------
app.use(express.urlencoded()); // Parse URL-encoded bodies (form data)
app.use(userRouter); // Use userRouter for user-related routes
app.use("/host", hostRouter); // Use hostRouter for host-related routes

// Serve static files from 'public' folder
app.use(express.static(path.join(rootDir, 'public')));

// -------------------- 404 Page Handler ----------------
app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' }); // Render 404 EJS template
});

// -------------------- Start Server -------------------
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
