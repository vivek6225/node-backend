// ---------------- Core Module ------------------
// 'path' is a core Node.js module for handling and transforming file paths
const path = require('path');

// Export the root directory of the project
// require.main.filename gives the entry file of the application (e.g., app.js)
// path.dirname() extracts the directory part of that file path
module.exports = path.dirname(require.main.filename);
