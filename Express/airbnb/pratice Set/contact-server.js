// -------------------- External Modules -------------
const express = require('express'); // Import Express framework


// -------------------- Local Modules ------------------
const homeRouter = require('./routes/homeRouter');
const contactRouter = require('./routes/contactRouter');

// -------------------- App Setup ----------------------
const app = express();  // Create an Express app instance


app.use(express.urlencoded());

// -------------------- Routers -------------------------
app.use(homeRouter);
app.use(contactRouter);

// -------------------- Start Server --------------------
const PORT = 3001; 
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
