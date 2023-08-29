const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let path = require('path'); // Import the path module

// Mount the express.static() middleware to serve assets from the 'public' folder using app.use method
/*app.use('/public', express.static(path.join(__dirname, 'public')));

// Define a route using the app.get() method
/*app.get('/', function(req, res) {
  // Use the path module to get the absolute path of the HTML file
  let absolutePath = path.join(__dirname, 'views', 'index.html');

  // Send the HTML file as a response
 /* res.sendFile(absolutePath);
});

// Define a route for serving JSON response
app.get('/json', function(req, res) {

  const mySecret = process.env['MESSAGE_STYLE'];

  // Transform the message based on the MESSAGE_STYLE value
  const message = mySecret === 'uppercase' ? 'HELLO JSON' : 'Hello json';
  // Send the transformed response
  res.json({ message: message });

});
//......................
// Define a route for serving JSON response
app.get('/json', (req, res) => {
  const messageStyle = process.env.MESSAGE_STYLE;

  if (messageStyle === 'uppercase') {
    const message = 'Hello json';
    res.json({
      message: message.toUpperCase()
    });
  } else {
    res.json({
      message: 'Hello json'
    });
  }
});*/
//...............................
// Logger middleware function
/*function loggerMiddleware(req, res, next) {
  const method = req.method;
  const path = req.path;
  const ip = req.ip;

  console.log(`${method} ${path} - ${ip}`);

  // Call next to continue processing
  next();
}

// Mount the logger middleware at root level
app.use(loggerMiddleware);

// Define a route for serving JSON response
app.get('/json', function(req, res) {
  res.json({ message: 'Hello json' });
});*/

//...............................
// myMiddleware
/*function addCurrentTime(req, res, next) {
  req.time = new Date().toString();
  next();
}


// Define a route for the /now endpoint and apply the middleware
app.get('/now', addCurrentTime, function(req, res) {
  res.json({ time: req.time });
});

// Define other routes and handlers...

//.................................
// Define the echo route
app.get('/:word/echo', function(req, res) {  //:word is a dynamic parameter that will be extracted from the URL. The route handler extracts the echoed word from req.params.word and constructs a JSON response with the echoed word.
  const echoWord = req.params.word;
  res.json({ echo: echoWord });
});

//..................................
// Define the /name route using app.route() at the path
app.route('/name')
  .get(function(req, res) { //The .get() method is chained to handle GET requests
    const firstName = req.query.first || 'dodo';
    const lastName = req.query.last || 'mouissaoui';
    //the code extracts the first and last parameters from the query string using req.query. If the parameters are not provided, default values are used. 
    const fullName = `${firstName} ${lastName}`;
    res.json({ name: fullName });
  })
  .post(function(req, res) {
    // Handle POST request data here
    // You can access the request body using req.body
    // Example: const firstName = req.body.first;
    // Example: const lastName = req.body.last;

    // Respond with a JSON success message
    res.json({ message: 'Data received successfully' });
  });*/

//.....................................
// Use bodyParser.urlencoded() middleware
/*app.use(bodyParser.urlencoded({ extended: false })); //The { extended: false } option indicates that the data will be parsed using the classic encoding querystring library.

// Example route and handler for GET request
app.get('/', function(req, res) {
  res.send('Hello, this is a GET request');
});


// Example route and handler for POST request
app.post('/submit', function(req, res) {
  const formData = req.body;
  res.json(formData); // Echo the submitted data as JSON response
});*/
//.................................

// Use bodyParser.urlencoded() middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')));
// Serve the HTML form at the root path
app.get('/', function(req, res) {
  let absolutePath = path.join(__dirname, 'views', 'index.html');
  res.sendFile(absolutePath);
});

// Handle the form submission
app.post('/name', function(req, res) {
  const firstName = req.body.first || 'firstname';
  const lastName = req.body.last || 'lastname';
  const fullName = `${firstName} ${lastName}`;
  res.json({ name: fullName });
});

module.exports = app;

