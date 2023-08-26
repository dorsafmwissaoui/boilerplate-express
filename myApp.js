let express = require('express');
let app = express();

// Define a route using the app.get() method
app.get('/', function(req, res) {
  res.send('Hello Express');
});

module.exports = app; // Export the Express app











































module.exports = app;
