//--------------- Core module ----------------------------------
const path = require('path');

// ------------ External Module ------------------------------
const express = require('express');

// ---------- Local Modules ----------------------------------
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");


// ---------- App Setup --------------------------------------
const app = express();
const PORT = 3000;

// Parse URL-encoded bodies (for form submissions)
app.use(express.urlencoded({ extended: false }));

// Use modular routers
app.use(userRouter);
app.use("/host",hostRouter);

// ---------- Routes -----------------------------------------

// Home Page
app.get("/", (req, res, next) => {
  console.log(req.url, req.method);
  res.send(`
    <h1>Welcome to Airbnb</h1>
    <a href="/host/add-home">Add Home</a>
  `);
});

// Host Add Home Form (GET)
app.get("/host/add-home", (req, res, next) => {
  res.send(`
    <h1>Register your home here:</h1>
    <form action="/host/add-home" method="POST">
      <input type="text" name="housename" placeholder="Enter the name of your house"/>
      <input type="submit"/>
    </form>
  `);
});

// Host Add Home Form Submission (POST)
app.post("/host/add-home", (req, res, next) => {
  console.log("Form Data:", req.body); // { housename: '...' }
  res.send(`
    <h1>Home registered successfully!</h1>
    <a href="/">Go to Home</a>
  `);
});

// 404 Page (catch-all)
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir,'views','404.html'));
})

// ---------- Start Server -----------------------------------
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
