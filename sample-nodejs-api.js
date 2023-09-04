const express = require('express');
const app = express();
const port = 3000;

// Handle GET request for /hello endpoint
app.get('/hello', (req, res) => {
  res.send('Hi there!');
});

// Handle GET request for /whattimeisit endpoint
app.get('/whattimeisit', (req, res) => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
  res.send(`Current date and time: ${formattedDate}`);
});

// Handle GET request for /whatismyip endpoint
app.get('/whatismyip', (req, res) => {
  const clientIp = req.ip;
  res.send(`Your IP address is: ${clientIp}`);
});

// Start the server
app.listen(port, () => {
  console.log(`The app is running at http://localhost:${port}`);
});