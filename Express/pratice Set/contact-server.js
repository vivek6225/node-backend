
// -------------------- External Modules --------------------
const express = require('express');   // Import Express framework
const bodyParser = require('body-parser'); // Middleware to parse form data

// -------------------- App Setup --------------------
const app = express();   // Create an Express app instance
const PORT = 3001;       // Server port number

// -------------------- Middlewares --------------------
// Middleware 1: Runs on every request
app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next(); // Pass control to next middleware/route
});

// Middleware 2: Runs on every request
app.use((req, res, next) => {
  console.log("Second Dummy Middleware", req.url, req.method);
  next();
});

// Middleware to parse form data (must be before POST handlers)
app.use(bodyParser.urlencoded({ extended: false }));

// -------------------- Routes --------------------
// Route: Home page (GET /)
app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to Complete Coding</h1>`);
});

// Route: Contact-us form (GET /contact-us)
app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`
    <h1>Please give me your details here</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name"/>
      <input type="email" name="email" placeholder="Enter your email"/>
      <input type="submit"/>
    </form>
  `);
});


// Route: Handle contact form submission (POST /contact-us)
app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method);
  console.log("Form Data:", req.body);   // Access parsed form data
  res.send(`<h1>We will contact you shortly, ${req.body.name}!</h1>`);
});

// -------------------- Start Server --------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
