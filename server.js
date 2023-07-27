const express = require('express');
const app = express();
const path = require('path');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define a route handler for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Define a route handler for the /getData route
app.get('/getData', (req, res) => {
  // Replace this with your logic to handle the /getData route and send the response
  const data = { message: 'Sample data from the server' };
  res.json(data);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
