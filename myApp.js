let express = require('express');
let app = express();
let path = require('path'); // Import the path module

// Mount the express.static() middleware to serve assets from the 'public' folder using app.use method
app.use('/public', express.static(path.join(__dirname, 'public')));

// Define a route using the app.get() method
app.get('/', function(req, res) {
  // Use the path module to get the absolute path of the HTML file
  let absolutePath = path.join(__dirname, 'views', 'index.html');

  // Send the HTML file as a response
  res.sendFile(absolutePath);
});

module.exports = app; // Export the Express app











































module.exports = app;
